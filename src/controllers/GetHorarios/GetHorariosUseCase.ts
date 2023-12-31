import { info } from "veclog";
import { AppError } from "../../config/error";
import { formatFromJSON } from "../../utils/formatFromSheet";
import { Tempo } from "../../utils/formatHorarios";
import { prisma } from "../../utils/prisma.client";
import { cache } from "../../config/cache";

export default class GetHorariosUseCase {
  async execute({ turma }: { turma: string }): Promise<Tempo[]> {
    if (cache.get(turma)) return cache.get(turma) as Tempo[]
    const data = await prisma.tempos.findFirst();
    if (!data) throw new AppError("Ainda não há horários.");
    cache.set(turma, formatFromJSON(JSON.parse(data.value), turma))
    return formatFromJSON(JSON.parse(data.value), turma);
  }
}
