import { Request, Response } from 'express'
import { GetProfessorHorariosUseCase } from './GetProfessorHorariosUseCase';

const useCase = new GetProfessorHorariosUseCase()
export default class GetProfessorHorariosController {
        async handle(req: Request, res: Response) {
        const prof = req.params.prof
        const response = await useCase.execute({ prof })
        res.json(response);
    }
    async handleInTime(req: Request, res: Response) {
        const prof = req.params.prof
        const time = req.params.time
        const response = await useCase.byHour({ prof, time })
        res.json(response)
    }
}