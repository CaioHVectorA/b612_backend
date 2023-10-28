import { Response, Request } from "express";
import AdminLoginUseCase from "./adminLoginUseCase";
import { AppError } from "../../config/error";

export default class AdminLoginController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const usecase = new AdminLoginUseCase();
    const response = await usecase.execute({ email, password });
    if (!response) throw new AppError("Ocorreu um erro ao entrar na sua conta");
    res.status(200).json(response);
  }
}
