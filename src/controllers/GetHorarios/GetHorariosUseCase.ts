import { AppError } from "../../config/error";
import { formatFromJSON } from "../../utils/formatFromSheet";
import { Tempo } from "../../utils/formatHorarios";
import { prisma } from "../../utils/prisma.client";

export default class GetHorariosUseCase {
    async execute({ turma }: { turma: string }): Promise<Tempo[]> {
        const data = await prisma.tempos.findFirst()
        if (!data) throw new AppError('Erro!')
        return formatFromJSON(JSON.parse(data.value), turma)
    }
}