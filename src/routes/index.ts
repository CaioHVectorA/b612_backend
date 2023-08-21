import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
import { readFileSync } from "fs";
import XLSX from 'node-xlsx'
import { getIndex, getName, getTempo } from "../utils/formatHorarios";
const indexRoutes = Router();
console.log(process.cwd())
indexRoutes.get('/:index', (req: Request, res: Response) => {
    const { index } = req.params
    const path = `${process.cwd()}/src/myFile.xlsx`
    const teste = XLSX.parse(readFileSync(path))
    const data = teste[parseInt(index)]
    res.json(data)
})
indexRoutes.use('/aviso', AvisoRoute)
export { indexRoutes }