import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
import { readFileSync } from "fs";
import XLSX from "node-xlsx";
import { getIndex, getName, getTempo } from "../utils/formatHorarios";
import formatFromSheet, { getAllFromSheet } from "../utils/formatFromSheet";
import { horarioRoute } from "./TemposRoute";
const indexRoutes = Router();
indexRoutes.get('/unformatted', (req: Request, res: Response) => {
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  res.json(teste)
})

indexRoutes.get('/all', (req: Request, res: Response) => {
  const { turma } = req.params;
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  res.json(getAllFromSheet(teste))
})

indexRoutes.get("/all/:turma", (req: Request, res: Response) => {
  const { turma } = req.params;
  const path = `${process.cwd()}/src/myFile.xlsx`;
  const teste = XLSX.parse(readFileSync(path));
  let arr = [];
  for (let i = 0; i < 5; i++) {
    const data = teste[i];
    // console.log(teste[i])
    const response = formatFromSheet(data, turma);
    arr.push(response);
  }
  res.json(arr);
});
indexRoutes.use("/aviso", AvisoRoute);
indexRoutes.use('/horario', horarioRoute)
export { indexRoutes };
