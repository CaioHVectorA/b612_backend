import { Avisos } from "@prisma/client";
import { prisma } from "../../utils/prisma.client";

export default class GetAvisosUseCase {
    async execute(): Promise<Avisos[]> {
        const avisos = await prisma.avisos.findMany()
        return avisos
    }
}