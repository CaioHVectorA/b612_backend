import { PrismaClient, Tempo, Turma } from "@prisma/client";
import formatFromSheet, { getAllFromSheet } from "./src/utils/formatFromSheet";
import { writeFileSync } from "fs";
import { getTempo } from "./src/utils/formatHorarios";
(async () => {
    const prisma = new PrismaClient()
    await prisma.$executeRawUnsafe(`DELETE FROM TEMPO`)
    await prisma.$executeRawUnsafe(`DELETE FROM TURMA`)
    const turmaPromises = [] as Promise<Turma>[]
    for(let x = 1;x !== 4;x++) for (let y = 1; y !== 5; y++) {
        turmaPromises.push(prisma.turma.create({
            data: {
                turma: parseInt(`${x}00${y}`),
                serie: "JUST TESTING",
            }
        }))
      } 
    const turmas = await Promise.all(turmaPromises)
    const temposAtual = await prisma.tempos.findFirst()
    if (!temposAtual) return;
    const tempoPromises = [] as Promise<Tempo>[]
    getAllFromSheet(JSON.parse(temposAtual.value)).forEach(day => {
        // CHECAR TEMPOS PRO TURMA, TA ENTRANDO ERRADO!
        writeFileSync(process.cwd()+'/output.json', JSON.stringify(day))
        day.forEach((row, day_index) => {
            row.forEach((data, index) => {
                if (!data) return   
                const { horario, value, day, turma} = data
                if (index === 0) return;
                const formated = getTempo(value, horario)
                if (!formated) return
                const { isBreak, materia, sala, } = formated
                if (isBreak) console.log('t',formated)
                tempoPromises.push(prisma.tempo.create({data: {
                    day,
                    isBreak,
                    turmaId: turmas.find(e => e.turma === parseInt(turma))?.id || null,
                    materia,
                    sala,
                    horario
                }}))
            } 
        )
        })
    })
    const tempo = await Promise.all(tempoPromises)
    // const t = await prisma.$queryRaw`SELECT * FROM Admin`
})()