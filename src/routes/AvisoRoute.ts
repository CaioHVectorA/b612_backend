import { Router } from "express";
import CreateAvisoController from "../controllers/CreateAviso/CreateAvisoController";
import GetAvisosController from "../controllers/GetAvisos/GetAvisosController";

export const AvisoRoute = Router()

const create_controller = new CreateAvisoController()
const getAvisos_controller = new GetAvisosController()
AvisoRoute.get('/', getAvisos_controller.handle)
AvisoRoute.post('/', create_controller.handle)