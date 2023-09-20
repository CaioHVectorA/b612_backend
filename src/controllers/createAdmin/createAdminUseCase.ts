import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class CreateAdminUseCase {
    async execute({ name,password }: { name: string, password: string }): Promise<boolean> {
        if (!name || !password) throw new AppError('Faltou credenciais!')
        const newUser = await prisma.admin.create({data: {name,password}})
        return !!newUser
    }
}