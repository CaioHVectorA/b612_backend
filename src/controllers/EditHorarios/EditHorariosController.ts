import { Request, Response } from "express";
import EditHorariosUseCase from "./EditHorariosUseCase";
import { AppError } from "../../config/error";
const usecase = new EditHorariosUseCase();
export default class EditHorariosController {
  async handle(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    if (!!!data) throw new AppError("Não entregou data");
    const response = await usecase.execute({ data: JSON.stringify(data) });
    res.json(response);
  }
}
