import { info } from "veclog";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class CreateAdminUseCase {
    async execute({ name,password, can_use_zap = false }: { name: string, password: string, can_use_zap: boolean }): Promise<boolean> {
        info('Requisição no banco de dados: Admin Create',true)
        if (!name || !password) throw new AppError('Faltou credenciais!')
        const newUser = await prisma.admin.create({data: {name,password, can_use_zap}})
        return !!newUser
    }
}