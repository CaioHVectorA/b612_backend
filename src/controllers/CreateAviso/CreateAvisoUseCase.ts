import { Avisos } from "@prisma/client";
import { AppError } from "../../config/error";
import { T_Aviso } from "../../utils/entities/Aviso";
import { prisma } from "../../utils/prisma.client";
import { info } from "veclog";

export default class CreateAvisoUseCase {
    async execute(data: T_Aviso): Promise<Avisos> {
        info('Requisição no banco de dados: Aviso Create',true)
        const newAviso = await prisma.avisos.create({
            data,
        })
        if (!newAviso) throw new AppError("Usuário não criado.")
        return newAviso
    }
}