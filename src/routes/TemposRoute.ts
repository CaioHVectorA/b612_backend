import { Router } from "express";
import EditHorariosController from "../controllers/EditHorarios/EditHorariosController";
import GetHorariosController from "../controllers/GetHorarios/GetHorariosController";
import { authorize } from "../config/authorizets";
import { GetHorariosByIdController } from "../controllers/getHorarioById/GetHorarioByIdController";
import { SetHorarioDescriptionController } from "../controllers/SetHorarioDescription/SetHorarioDescriptionController";
import GetProfessorHorariosController from "../controllers/getProfessorHorarios/getProfessorHorariosController";
const editController = new EditHorariosController()
const getController = new GetHorariosController()
const getByIdController = new GetHorariosByIdController()
const getProfTimes = new GetProfessorHorariosController()
export const horarioRoute = Router()

horarioRoute.post('/edit', authorize, editController.handle)
horarioRoute.get("/:turma", getController.handle);
horarioRoute.get("/id/:id", getByIdController.handle)
horarioRoute.get('/prof/:prof/:time', getProfTimes.handleInTime)
horarioRoute.get('/prof/:prof', getProfTimes.handle)