import { AppError } from "../../config/error";
import { I_Tempo_WITHOUT_ENCODING } from "../../utils/entities/Tempos";
import { getAllFromSheet, TEMPOS_RANGE } from "../../utils/formatFromSheet";
import { prisma } from "../../utils/prisma.client";

export class GetProfessorHorariosUseCase {
    async execute({ prof }: { prof: string }): Promise<I_Tempo_WITHOUT_ENCODING[]> {
        const sheetData = await prisma.tempos.findFirst()
        if (!sheetData) throw new AppError('Não foi encontrada nenhum registro de horários.')
        const data = getAllFromSheet(JSON.parse(sheetData.value))
    const timesWhichHasProf = [] as I_Tempo_WITHOUT_ENCODING[]
    data.forEach(_ => _.forEach(k => k.forEach((tempo) => {
        if (tempo.value.toUpperCase().includes(prof.toUpperCase())) timesWhichHasProf.push(tempo)
    })))
    if (timesWhichHasProf.length === 0) throw new AppError('Professor não existe no sistema')
        return timesWhichHasProf
    }
    async byHour({ prof, time }: { prof: string, time: string }) {
        function sumNumbers(tempo: string){
            const [from, to] = tempo.split(' às ').join('|').replaceAll(':','').split('|')
            return {from: parseInt(from),to: parseInt(to)} as const
        }
        // Para ter uma comparação entre os tempos e saber qual o horário atual, o horário é convertido em numero dessa forma: 10:35 -> 1035
        // logo, como 10:47 é "maior" que 10:20 -> 1047 > 1020 (true)
        // Portanto, OBS: A rota que será visitada é /horario/prof/:prof/:time
        const sheetData = await prisma.tempos.findFirst()
        if (!sheetData) throw new AppError('Não foi encontrada nenhum registro de horários.')
        const data = getAllFromSheet(JSON.parse(sheetData.value))
    const timesWhichHasProf = [] as I_Tempo_WITHOUT_ENCODING[]
        if (data.length === 0) throw new AppError('Professor não existe no sistema')
        data.forEach(_ => _.forEach(k => k.forEach((tempo) => {
            if (tempo.value.toUpperCase().includes(prof.toUpperCase())) timesWhichHasProf.push(tempo)
        })))
    const actualDay = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"][new Date().getDay()]
    const filteredTimes = timesWhichHasProf.filter(item => item.day === actualDay)
        let tempoFound;
        const summers = TEMPOS_RANGE.map(i => sumNumbers(i))
        filteredTimes.forEach(({ horario, day, value, turma }) => {
            summers.forEach(i => {
                const horarioNumber = sumNumbers(horario)
                if (horarioNumber.from <= parseInt(time) && horarioNumber.to > parseInt(time)) tempoFound = { horario, day, value, turma }
            })
        })
        if (!tempoFound) throw new AppError('Não há tempos deste professor hoje.')
        return tempoFound
    }
}