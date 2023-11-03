import { AppError } from "../../config/error";
import { prisma } from "../../utils/prisma.client";

export class GetNoteUseCase {
    async execute({ id }: { id: string }): Promise<string> {
        const foundNote = await prisma.profNote.findUnique({ where: { uuid: id } })
        if (!foundNote) return "Sem nota"
        return foundNote.description
    }
}