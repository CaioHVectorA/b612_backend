import { Request, Response } from "express";
import AvisoUseCase from "./CreateAvisoUseCase";
import { T_Aviso } from "../../utils/entities/Aviso";

export default class CreateAvisoController {
    async handle(req: Request, res: Response) {
        const usecase = new AvisoUseCase()
        const data: T_Aviso = req.body
        const response = await usecase.execute(data)
        res.json(response)
    }
}