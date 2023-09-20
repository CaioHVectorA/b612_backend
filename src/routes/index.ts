//@ts-nocheck
import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
import { exampleData } from "../utils/example_data";
import { getIndex, getName, getTempo } from "../utils/formatHorarios";
import formatFromSheet, {
  formatFromJSON,
  getAllFromSheet,
} from "../utils/formatFromSheet";
import { horarioRoute } from "./TemposRoute";
import { AppError } from "../config/error";
import { adminRoutes } from "./AdminRoute";
const indexRoutes = Router();
indexRoutes.get("/unformatted", (req: Request, res: Response) => {
  res.json(exampleData);
});
indexRoutes.use("/admin", adminRoutes)
indexRoutes.use("/aviso", AvisoRoute);
indexRoutes.use("/horario", horarioRoute);
export { indexRoutes };
