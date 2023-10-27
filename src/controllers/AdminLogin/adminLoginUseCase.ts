import { info } from "veclog";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";
import { Admin } from "@prisma/client";

export default class AdminLoginUseCase {
  async execute({
    name,
    password,
  }: {
    name: string;
    password: string;
  }): Promise<Admin | string> {
    info("Requisição no banco de dados: Admin Login", true);
    const admFound = await prisma.admin.findFirst({ where: { name } });
    if (!admFound) return "Usuário não encontrado!";
    if (admFound.password !== password) return "Senha incorreta!";
    return admFound;
  }
}
