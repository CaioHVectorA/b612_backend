import { Router } from "express";
import EditHorariosController from "../controllers/EditHorarios/EditHorariosController";
import GetHorariosController from "../controllers/GetHorarios/GetHorariosController";

const editController = new EditHorariosController()
const getController = new GetHorariosController()
export const horarioRoute = Router()

horarioRoute.post('/edit', editController.handle)
horarioRoute.get("/:turma", getController.handle);

