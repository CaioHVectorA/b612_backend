import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
import { readFileSync } from "fs";
import XLSX from "node-xlsx";
import { getIndex, getName, getTempo } from "../utils/formatHorarios";
const indexRoutes = Router();
const tempos = [
  "7:00",
  "7:50",
  "8:55",
  "9:45",
  "10:35",
  "11:25",
  "13:25",
  "14:15",
  "15:05",
  "16:10",
  "17:00",
];
const turmas: number[] = [
  1001, 1002, 1003, 1004, 2001, 2002, 2003, 2004, 3001, 3002, 3003, 3004,
];
indexRoutes.get("/:turma", (req: Request, res: Response) => {
  const { turma } = req.params;
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  const data = teste[1];
  const arr: any[] = [];
  // for (i = 0; i > 11; i++) {
  const times = data.data.slice(2);
  times.forEach((i) => {
    arr.push(i[turmas.findIndex((i) => i === parseInt(turma)) + 1]);
  });
  // }
  const formatedArr = arr
    .map((item, index) => getTempo(item, tempos[index]))
    .map((turma, index) => {
      if (index === 2) {
        return "lanche da manhã";
      } else if (index === 7) {
        return "almoço";
      } else if (index === 10) {
        return "lanche da tarde";
      }
      return turma;
    });
  res.json(formatedArr);
});
indexRoutes.get("/:index/:turma", (req: Request, res: Response) => {
  const { index, turma } = req.params;
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  const data =
    teste[parseInt(index)].data[2 + getIndex(teste[parseInt(index)])];
  const turmaFound = turmas.findIndex((i) => i === parseInt(turma));
  const mapped = data.map((item, _index) =>
    getTempo(item, tempos[parseInt(index)])
  );
  res.json(mapped[turmaFound + 1]);
});
indexRoutes.use("/aviso", AvisoRoute);
export { indexRoutes };
