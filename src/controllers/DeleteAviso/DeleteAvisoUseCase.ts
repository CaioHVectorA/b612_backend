import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class DeleteAvisoUseCase {
  async execute({ id }: { id: number }): Promise<boolean> {
    const foundAviso = await prisma.avisos.delete({ where: { id } });
    if (!foundAviso) throw new AppError("Aviso não encontrado", 404);
    return !!foundAviso;
  }
}
