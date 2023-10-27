import { Request, Response } from "express";
import GetHorariosUseCase from "./GetHorariosUseCase";

const usecase = new GetHorariosUseCase();
export default class GetHorariosController {
  async handle(req: Request, res: Response) {
    const { turma } = req.params;
    const response = await usecase.execute({ turma });
    console.log(response[0]);
    res.json(response);
  }
}
