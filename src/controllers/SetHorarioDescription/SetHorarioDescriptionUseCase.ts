import { AppError } from "../../config/error";
import formatFromSheet, { formatFromJSON } from "../../utils/formatFromSheet";
import { Tempo } from "../../utils/formatHorarios";
import { prisma } from "../../utils/prisma.client";

export class SetHorarioDescriptionUseCase {
    async execute({ id, description }: { id: string, description: string }): Promise<boolean> {
        const tempos = await prisma.tempos.findFirst()
        if (!tempos) throw new AppError("Sem tempo irmão! (Nenhum horário foi encontrado)")
        // const data = JSON.parse(tempos.value)
        let allTempos = [] as Tempo[];
        for (let x = 1; x !== 4; x++) {
            for (let y = 1; y !== 5; y++) {
                console.log(`${x}00${y}`)
                const data = formatFromJSON(tempos.value,`${x}00${y}`) as Tempo[][]
                data.forEach((horarios) => {
                    horarios.forEach(horario => allTempos.push(horario))
                })
            }
        }
        const found = allTempos.find(item => item.id === id)
        if (!found) throw new AppError("Ocorreu um erro: O Horário não foi encontrado.")
        const exists = await prisma.profNote.findUnique({where: {uuid: id}})
        if (exists) {
            const edited = await prisma.profNote.update({ where: { id: exists.id }, data: { description } })
            return true
        }
        const newNote = await prisma.profNote.create({ data: {
            uuid: id,
            description
        } })
        return true 
    }
}