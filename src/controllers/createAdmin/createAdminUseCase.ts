import { info } from "veclog";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class CreateAdminUseCase {
    async execute({ name,password }: { name: string, password: string }): Promise<boolean> {
        info('Requisição no banco de dados: Admin Create',true)
        if (!name || !password) throw new AppError('Faltou credenciais!')
        const newUser = await prisma.admin.create({data: {name,password}})
        return !!newUser
    }
}