import { Request, Response } from "express";
import EditHorariosUseCase from "./EditHorariosUseCase";

const usecase = new EditHorariosUseCase()
export default class EditHorariosController {
    async handle(req: Request, res: Response) {
        const data = req.body
        const response = await usecase.execute({ data: JSON.stringify(data) })
        res.json(response)
    }
}