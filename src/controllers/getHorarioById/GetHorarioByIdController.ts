import { Request, Response } from "express";
import { GetHorariosByIDUseCase } from "./GetHorarioByIdUseCase";

export class GetHorariosByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const response = await new GetHorariosByIDUseCase().execute({ id })
        res.json(response)
    }
}