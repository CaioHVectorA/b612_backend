//@ts-nocheck
import { type } from "os";
import { Tempo, getIndex, getName, getTempo } from "./formatHorarios";
import { randomUUID } from "crypto";
import { getTimestamp } from './timestampFuncs'
import { writeFileSync } from "fs";
import { getAllFromSheetResponse } from "./entities/Tempos";
const TEMPOS = [
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
export const TEMPOS_RANGE = ['7:00 às 7:50', '7:50 às 8:40', '8:40 às 8:55', '8:55 às 9:45', '9:45 às 10:35', '10:35 às 11:25', '11:25 às 12:15', '12:15 às 13:25', '13:25 às 14:15', '14:15 às 15:05', '15:05 às 15:20', '15:20 às 16:10', '16:10 às 17:00']
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
      getTempo(item, `${TEMPOS[index]} - ${TEMPOS[index + 1]}`)
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

export function getAllFromSheet(Result: any): getAllFromSheetResponse {
  const t = getTimestamp()
  const arr: any[] = [];
  let d = (typeof Result === 'string' ? Object.values(JSON.parse(Result)) : Object.values(Result)) as Tempo[][][]
  if (typeof d === 'string') d = JSON.parse(d) // Yep two json parse 
  const turmas = Object.values(JSON.parse(Result)[0][0]) as { columnIndex: bigint | number, value: string, id: string, columnIndex_two: number }[]
  d.forEach((item, index) => {
    arr.push(item.slice(1 + getIndex({ data: JSON.parse(Result) }), 15));
  });
  const formated = arr.map((item, dayIndex) => {
    return item.map((tempos, index) => {
      return Object.values(tempos).map((tempo, __index) => {
        const horario = TEMPOS_RANGE[index]
        const value = tempo.value
        const turma = turmas.find(t => {
        return t.columnIndex_two === tempo.columnIndex_two || t.columnIndex === tempo.columnIndex
        })
        if (!turma) console.log(tempo,tempo.columnIndex_two + 1)
        return { value, horario: horario, day: ["SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA"][dayIndex], turma: turma?.value, id: tempo.id }
      });
    });
  });
  return formated;
}
export function formatFromJSON(Result: any, TURMA: string) {
  const finalArr = [];
  const arr = [];
  let d = typeof Result === 'string' ? JSON.parse(Result) : Result
  if (typeof d === 'string') d = JSON.parse(d) // Yep two json parse 
  Object.values(d).forEach((days, index) => {
    const _index = index === 0 ? 1 : 0;
    console.log(index * 2)
    const temparr = [];
    days.slice(_index, 13 + index + (_index * 2)).forEach((day, index) => {
      temparr.push(
        //index
        Object.values(day)
        //day
      );
    });
    arr.push(temparr);
  });
  type value_data = { value: string; columnIndex: bigint | number, id: string };
  arr.forEach((dia, index) => {
    let turmas: value_data[]; // armazenar os códigos
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
              id: tempo.id,
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
              turma: TURMA,
            }
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
