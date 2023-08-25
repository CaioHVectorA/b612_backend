import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
import { readFileSync } from "fs";
import XLSX from "node-xlsx";
import { getIndex, getName, getTempo } from "../utils/formatHorarios";
import formatFromSheet from "../utils/formatFromSheet";
const indexRoutes = Router();

indexRoutes.get("/all/:turma", (req: Request, res: Response) => {
  const { turma } = req.params;
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  let arr = [];
  for (let i = 0; i < 5; i++) {
    const data = teste[i];
    const response = formatFromSheet(data, turma);
    console.log(response);
    arr.push(response);
  }
  res.json(arr);
});
indexRoutes.get("/:turma", (req: Request, res: Response) => {
  const { turma } = req.params;
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  const i = new Date().getDay();
  console.log(i);
  const data = teste[i - 1];
  const response = formatFromSheet(data, turma);
  res.json(response);
});
// indexRoutes.get("/:index/:turma", (req: Request, res: Response) => {
//   const { index, turma } = req.params;
//   const path = `${process.cwd()}/src/myFile.xlsx`;
//   const teste = XLSX.parse(readFileSync(path));
//   const data =
//     teste[parseInt(index)].data[2 + getIndex(teste[parseInt(index)])];
//   const turmaFound = turmas.findIndex((i) => i === parseInt(turma));
//   const mapped = data.map((item, _index) =>
//     getTempo(item, tempos[parseInt(index)])
//   );
//   res.json(mapped[turmaFound + 1]);
// });
indexRoutes.use("/aviso", AvisoRoute);
export { indexRoutes };
