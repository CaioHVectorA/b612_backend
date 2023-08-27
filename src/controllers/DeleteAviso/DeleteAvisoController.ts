import { Request, Response } from "express";
import DeleteAvisoUseCase from "./DeleteAvisoUseCase";
import { AppError } from "../../config/error";

const usecase = new DeleteAvisoUseCase();
export default class DeleteAvisoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const response = await usecase.execute({ id: parseInt(id) });
    if (!!!response) throw new AppError("Algo deu errado.");
    res.status(200).json({ message: "Aviso Deletado com sucesso!" });
  }
  async deleteAll(req: Request, res: Response) {
    const response = await usecase.deleteAll()
    if (!!!response) throw new AppError('Não foi possível deletar todos.')
    res.status(200).json({ message: 'Todos deletados com sucesso!' })
  }
}
