import { Router } from "express";
import EditHorariosController from "../controllers/EditHorarios/EditHorariosController";

const editController = new EditHorariosController()
export const horarioRoute = Router()
horarioRoute.post('/edit', editController.handle)