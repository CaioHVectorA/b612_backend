import { Request, Response } from "express";
import DeleteAvisoUseCase from "./DeleteAvisoUseCase";
import { AppError } from "../../config/error";

export default class DeleteAvisoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const usecase = new DeleteAvisoUseCase();
    const response = await usecase.execute({ id: parseInt(id) });
    if (!!!response) throw new AppError("Algo deu errado.");
    res.status(200).json({ message: "Aviso Deletado com sucesso!" });
  }
}
