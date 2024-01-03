import { Avisos } from "@prisma/client";
import { AppError } from "../../config/error";
import { T_Aviso } from "../../utils/entities/Aviso";
import { prisma } from "../../utils/prisma.client";

export default class CreateAvisoUseCase {
    async execute(data: T_Aviso): Promise<Avisos> {
        const newAviso = await prisma.avisos.create({
            data,
        })
        if (!newAviso) throw new AppError("Usuário não criado.")
        return newAviso
    }
}