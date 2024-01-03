import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";
import { Admin } from "@prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "dotenv";
import { AdminResponse } from "../../utils/entities/AdminResponse";
const key = (() => {
  return config({ path: process.cwd()+'/.env.auth' }).parsed?.SECRET || "NONE_KEY"
  })()
export default class AdminLoginUseCase {
  async execute({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AdminResponse> {
    const admFound = await prisma.admin.findFirst({ where: { email } });
    if (!admFound) throw new AppError("Usuário não encontrado!");
    const correctedPass = await compare(password, admFound.password)
    if (!correctedPass) throw new AppError("Senha incorreta!");
    // retornar JWT e admin junto?
    const jwt = sign({ id: admFound.id }, key)
    return { token: jwt, name: admFound.name, email, role: admFound.role };
  }
}
