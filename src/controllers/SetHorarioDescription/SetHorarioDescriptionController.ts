import { Request, Response } from "express";
import { SetHorarioDescriptionUseCase } from "./SetHorarioDescriptionUseCase";
import { AppError } from "../../config/error";

export class SetHorarioDescriptionController{
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { description } = req.body
        const response = await new SetHorarioDescriptionUseCase().execute({ id, description })
        if (!response) throw new AppError("Ocorreu um erro.")
        res.status(200).json({ message: "Editado com sucesso!" })
    }
}