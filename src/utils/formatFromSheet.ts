//@ts-nocheck
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
