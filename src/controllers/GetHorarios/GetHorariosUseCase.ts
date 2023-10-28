import { info } from "veclog";
import { AppError } from "../../config/error";
import { formatFromJSON } from "../../utils/formatFromSheet";
import { Tempo } from "../../utils/formatHorarios";
import { prisma } from "../../utils/prisma.client";

export default class GetHorariosUseCase {
  async execute({ turma }: { turma: string }): Promise<Tempo[]> {
    info("Requisição no banco de dados: Aviso Get Horarios!", true);
    const data = await prisma.tempos.findFirst();
    console.log(data);
    if (!data) throw new AppError("Ainda não há horários.");
    return formatFromJSON(JSON.parse(data.value), turma);
  }
}
