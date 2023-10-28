import { Router } from "express";
import EditHorariosController from "../controllers/EditHorarios/EditHorariosController";
import GetHorariosController from "../controllers/GetHorarios/GetHorariosController";
import { authorize } from "../config/authorizets";

const editController = new EditHorariosController()
const getController = new GetHorariosController()
export const horarioRoute = Router()

horarioRoute.post('/edit', authorize, editController.handle)
horarioRoute.get("/:turma", getController.handle);

