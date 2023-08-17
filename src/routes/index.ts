import { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma.client";
import { AvisoRoute } from "./AvisoRoute";
const indexRoutes = Router();
indexRoutes.use('/aviso', AvisoRoute)
export { indexRoutes }