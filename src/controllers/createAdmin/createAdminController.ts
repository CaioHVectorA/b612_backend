import { Request, Response } from "express";
import CreateAdminUseCase from "./createAdminUseCase";
import { AppError } from "../../config/error";

export default class CreateAdminController {
    async handle(req: Request, res: Response) {
        const { name, password } = req.body
        const usecase = new CreateAdminUseCase()
        const response = await usecase.execute({ name,password })
        if (!response) throw new AppError('Algo deu errado na criação de administrador.')
        res.status(201).json({ message: 'Usuário Criado!' })
    }
}