import { sign } from "jsonwebtoken";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";
import { config } from "dotenv";
const key = (() => {
    return config({ path: process.cwd()+'/.env.auth' }).parsed?.SECRET || "NONE_KEY"
    })()
export default class LoginGoogleUseCase {
    async execute({ email }: { email: string }) {
        const found = await prisma.admin.findFirst({
            where: { email }
        })
        if (!found) throw new AppError("Conta google não registrada!")
        const jwt = sign({ id: found.id }, key)
        const role = found.role === 'Direção' ? 'direcao' : 'professor'
        return { jwt, role }
    }
}