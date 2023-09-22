import { fatal, info } from "veclog";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class DeleteAvisoUseCase {
  async execute({ id }: { id: number }): Promise<boolean> {
    info('Requisição no banco de dados: Aviso Delete',true)
    const foundAviso = await prisma.avisos.delete({ where: { id } });
    if (!foundAviso) throw new AppError("Aviso não encontrado", 404);
    return !!foundAviso;
  }
  async deleteAll(): Promise<boolean> {
    fatal('Requisição no banco de dados: Aviso Delete All!',true)
    const allDeleted = await prisma.avisos.deleteMany()
    return !!allDeleted
  }
}
