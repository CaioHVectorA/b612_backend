import { info } from "veclog";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class CreateAdminUseCase {
  async execute({
    name,
    password,
    can_use_zap = false,
  }: {
    name: string;
    password: string;
    can_use_zap: boolean;
  }): Promise<true | string> {
    info("Requisição no banco de dados: Admin Create", true);
    const findUser = await prisma.admin.findFirst({ where: { name } });
    if (findUser) return "Já existe usuário com esse nome!";
    // if (!name || !password) throw new AppError("Faltou credenciais!");
    const newUser = await prisma.admin.create({
      data: { name, password, can_use_zap },
    });
    return !!newUser;
  }
}
