import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";
import { genSalt, hash } from 'bcrypt'
import { sign, decode } from 'jsonwebtoken'
import { config } from "dotenv";
import { Admin } from "@prisma/client";
import { AdminResponse } from "../../utils/entities/AdminResponse";
const key = (() => {
  return config({ path: process.cwd()+'/.env.auth' }).parsed?.SECRET || "NONE_KEY"
  })()
  const ACESS_CODE = (() => {
    return config({ path: process.cwd()+'/.env.auth' }).parsed?.ACESS_CODE
    })()
    type CreateProps = Omit<Admin, 'id'> & {acess_code: string}
  export default class CreateAdminUseCase {
  async execute({
    name,
    email,
    password,
    role,
    acess_code
  }: CreateProps): Promise<AdminResponse> {
    const findUser = await prisma.admin.findFirst({ where: { name } });
    if (findUser) throw new AppError("Já existe usuário com esse nome!");
    if (!password) throw new AppError("Faltou credenciais!");
    const salt = await genSalt(10)
    const encrypted_pass = await hash(password,salt)
    const acessed = ACESS_CODE ? (ACESS_CODE === acess_code) : true
    if (!acessed) throw new AppError('Acesso negado! Código de acesso errado', 401)
    const newUser = await prisma.admin.create({
      data: { name, email, password: encrypted_pass, role },
    });
    const jwt = sign({ id: newUser.id }, key)
    return { token: jwt, name, email, role };
  }
}
