import { Request, Response } from "express";
import CreateAdminUseCase from "./createAdminUseCase";
import { AppError } from "../../config/error";

export default class CreateAdminController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    console.log('data:',data)
    const usecase = new CreateAdminUseCase();
    const response = await usecase.execute(data);
    if (!response) throw new AppError("Algo deu errado na criação de administrador.");
    console.log(response)
    res.status(201).json(response);
  }
}
