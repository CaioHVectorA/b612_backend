import { info } from "veclog";
import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export default class AdminLoginUseCase {
    async execute({ name, password }: { name: string, password: string }): Promise<boolean> {
        info('Requisição no banco de dados: Admin Login',true)
        const admFound = await prisma.admin.findFirst({where: {name}})
        if (!admFound) throw new AppError('Usuário não encontrado!')
        if (admFound.password !== password) throw new AppError('Senha incorreta!')
        return !!admFound
    }    
}
