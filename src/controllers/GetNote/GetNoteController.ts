import { Request, Response } from 'express'
import { GetNoteUseCase } from './GetNoteUseCase'

const usecase = new GetNoteUseCase()
export default class GetNoteController {
        async handle(req: Request, res: Response) {
        const id = req.params.id
        const response = await usecase.execute({ id })
        res.json(response);
    }
}