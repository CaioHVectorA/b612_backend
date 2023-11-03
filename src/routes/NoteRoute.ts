import { Router } from "express";
import GetNoteController from "../controllers/GetNote/GetNoteController";
import { SetHorarioDescriptionController } from "../controllers/SetHorarioDescription/SetHorarioDescriptionController";
const get = new GetNoteController()
const edit = new SetHorarioDescriptionController()
export const NoteRoutes = Router()

NoteRoutes.get('/:id', get.handle)
NoteRoutes.post('/:id',edit.handle)