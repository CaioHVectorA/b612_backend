import { Request, Response } from "express";
import LoginGoogleUseCase from "./LoginGoogleUseCase";
export default class LoginGoogleController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;
    const data = await new LoginGoogleUseCase().execute({ email });
    res.json(data);
  }
}
