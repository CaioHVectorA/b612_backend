import { Request, Response } from "express";
import GetAvisosUseCase from "./GetAvisosUseCase";

export default class GetAvisosController {
    async handle(req: Request, res: Response) {
        const usecase = new GetAvisosUseCase()
        const response = await usecase.execute()
        res.json(response)
    }
}