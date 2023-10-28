import { Router } from "express";
import CreateAvisoController from "../controllers/CreateAviso/CreateAvisoController";
import GetAvisosController from "../controllers/GetAvisos/GetAvisosController";
import DeleteAvisoController from "../controllers/DeleteAviso/DeleteAvisoController";
import { authorize } from "../config/authorizets";

export const AvisoRoute = Router()

const create_controller = new CreateAvisoController()
const getAvisos_controller = new GetAvisosController()
const deleteAvisos_controller = new DeleteAvisoController()
AvisoRoute.get('/' , getAvisos_controller.handle)
AvisoRoute.post('/', authorize, create_controller.handle)
AvisoRoute.delete('/deleteall', authorize, deleteAvisos_controller.deleteAll)
AvisoRoute.delete('/:id', authorize, deleteAvisos_controller.handle)