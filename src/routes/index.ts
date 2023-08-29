//@ts-nocheck
import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
import { readFileSync } from "fs";
import XLSX from "node-xlsx";
import { exampleData } from "../utils/example_data";
import { getIndex, getName, getTempo } from "../utils/formatHorarios";
import formatFromSheet, {
  formatFromJSON,
  getAllFromSheet,
} from "../utils/formatFromSheet";
import { horarioRoute } from "./TemposRoute";
import { use } from "express/lib/router";
const indexRoutes = Router();
indexRoutes.get("/unformatted", (req: Request, res: Response) => {
  res.json(exampleData);
});

indexRoutes.get("/all", (req: Request, res: Response) => {
  res.json(formatFromJSON(exampleData, "3002"));
});

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

// indexRoutes.post("/login", async (req: Request, res: Response) => {
//   const { user, senha } = req.body;
//   const userFound = await prisma.admin.findFirst({
//     where: { name: user },
//   });
//   if (!userFound) {
//     const userCreated = await prisma.admin.create({
//       data: {
//         name: user,
//         password: senha,
//       },
//     });
//     res.status(200).json({ message: "sim" });
//   } else {
//     if (userFound.password === senha) {
//       res.status(200).json({ message: "LOGOU" });
//     } else {
//       res.status(404).json({ message: "ERROU SENHA" });
//     }
//   }
//   res.status(404).json({ message: "DEU ALGUMA MERDA!!!" });
// });
indexRoutes.use("/aviso", AvisoRoute);
indexRoutes.use("/horario", horarioRoute);
export { indexRoutes };
