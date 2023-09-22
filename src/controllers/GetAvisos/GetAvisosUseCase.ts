import { Avisos } from "@prisma/client";
import { prisma } from "../../utils/prisma.client";
import { info } from "veclog";

export default class GetAvisosUseCase {
    async execute(): Promise<Avisos[]> {
        info('Requisição no banco de dados: Aviso Get Avisos!',true)
        const avisos = await prisma.avisos.findMany()
        return avisos
    }
}