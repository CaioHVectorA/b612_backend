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
import { NoteRoutes } from './NoteRoute'
import { verify } from "jsonwebtoken";
import { cache } from "../config/cache";
const indexRoutes = Router();
indexRoutes.get("/unformatted", async (req: Request, res: Response) => {
  const data = (await prisma.tempos.findFirst())?.value
  if (!data) throw new AppError('S')
  res.json(getAllFromSheet(JSON.parse(data)));
});
indexRoutes.get('/uncache', (req, res) => {
  for(let x = 1;x !== 4;x++) for (let y = 1; y !== 5; y++) {
    cache.del(`${x}00${y}`)
  } 
  res.json({"Cache Deletado": "Y"})
})
indexRoutes.use("/admin", adminRoutes)
indexRoutes.use("/aviso", AvisoRoute);
indexRoutes.use("/horario", horarioRoute);
indexRoutes.use('/note', NoteRoutes)
export { indexRoutes };
