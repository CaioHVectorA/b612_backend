import { Response, Request } from "express";
import AdminLoginUseCase from "./adminLoginUseCase";
import { AppError } from "../../config/error";

export default class AdminLoginController {
  async handle(req: Request, res: Response) {
    const { name, password } = req.body;
    const usecase = new AdminLoginUseCase();
    const response = await usecase.execute({ name, password });
    if (!response) throw new AppError("Ocorreu um erro ao entrar na sua conta");
    if (typeof response === "string") res.status(400).json({ message: response });
    res.status(200).json({ message: "Logado com sucesso!" });
  }
}
