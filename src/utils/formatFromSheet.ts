//@ts-nocheck
import { type } from "os";
import { Tempo, getIndex, getName, getTempo } from "./formatHorarios";
const tempos = [
  "7:00",
  "7:50",
  "8:40",
  "8:55",
  "9:45",
  "10:35",
  "11:25",
  "12:15",
  "13:25",
  "14:15",
  "15:05",
  "15:20",
  "16:10",
  "17:00",
];
const turmas: number[] = [
  1001, 1002, 1003, 1004, 2001, 2002, 2003, 2004, 3001, 3002, 3003, 3004,
];
export default function formatFromSheet(data: any, turma: string): Tempo[] {
  const arr: any[] = [];
  // for (i = 0; i > 11; i++) {
  const times = data.data.slice(2 + getIndex(data));
  times.forEach((i) => {
    arr.push(i[turmas.findIndex((i) => i === parseInt(turma)) + 1]);
  });
  // }
  const formatedArr = arr
    .map((item, index) =>
      getTempo(item, `${tempos[index]} - ${tempos[index + 1]}`)
    )
    .map((turma, index) => {
      if (index === 2) {
        return {
          materia: "Lanche da Manhã",
          horario: "8:40 - 8:55",
          isBreak: true,
        };
      } else if (index === 7) {
        return { materia: "Almoço", horario: "12:15 - 13:25", isBreak: true };
      } else if (index === 10 && getName(data) !== "SEXTA-FEIRA") {
        return {
          materia: "Lanche da Tarde",
          horario: "15:05 - 15:20",
          isBreak: true,
        };
      }
      return turma;
    })
    .slice(0, 13);
  return formatedArr;
}

export function getAllFromSheet(data: any) {
  const arr: any[] = [];
  data.forEach((item) => {
    // arr.push(item.data)
    arr.push(item.data.slice(2 + getIndex(item), 15));
  });
  // DIA[] -> TEMPOS[](DE TURMAS, COM INDICE 0 COM OS TEMPOS)
  const formated = arr.map((item) => {
    return item.map((tempos) => {
      return tempos.slice(1).map((tempo, index) => {
        // if (index === 0) return
        return getTempo(tempo, tempos[0]);
      });
    });
  });
  return formated;
}

const TURMAS = {
  1001: "__EMPTY_1",
  1002: "__EMPTY_2",
  1003: "__EMPTY_3",
  1004: "__EMPTY_4",
  2001: "__EMPTY_5",
  2002: "__EMPTY_6",
  2003: "__EMPTY_7",
  2004: "__EMPTY_8",
  3001: "__EMPTY_9",
  3002: "__EMPTY_10",
  3003: "__EMPTY_11",
  3004: "__EMPTY_12",
};
export function formatFromJSON(Result: any, TURMA: string) {
  const finalArr = [];
  const arr = [];
  Object.values(JSON.parse(Result)).forEach((days, index) => {
    const _index = index === 0 ? 1 : 0;
    const temparr = [];
    days.slice(_index, 13 + index).forEach((day, index) => {
      temparr.push(
        //index
        Object.values(day)
        //day
      );
    });
    arr.push(temparr);
  });
  type value_data = { value: string; columnIndex: bigint | number };
  arr.forEach((dia, index) => {
    let turmas: value_data[]; // armazenar os códigos
    let tempos: value_data[] = []; // armazenar os tempos pós-processados de cada turma
    const _temparr = [];
    dia.forEach((tempos: value_data[], index) => {
      if (tempos.length === 0) return;
      if (index === 0) {
        turmas = tempos;
      } else {
        const formated = tempos.forEach((tempo, index) => {
          if (index !== 0) {
            const formated = getTempo(tempo.value, tempos[0].value);
            const final = {
              tempo: formated,
              turma: turmas.find(
                (turma) => tempo.columnIndex === turma.columnIndex
              )?.value,
            };
            _temparr.push(final);
            // return final;
          } else if (isNaN(tempo.value[0])) {
            const splitted = tempo.value.split(' ')
            const _data: Tempo = {
              tempo: {
                horario: splitted.slice(1).join(" ").replace("-", "").trim(),
                materia: splitted[0],
                isBreak: true
              },
              turma: TURMA
            }
            console.log(_data)
            _temparr.push(_data)
          }
        });
      }
    });
    finalArr.push(_temparr);
  });
  const filtered = finalArr.map((item) =>
    item.filter((t) => t.turma === TURMA)
  );
  return filtered;
}

//
