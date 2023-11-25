export type I_Tempo_WITHOUT_ENCODING  = {
    value: string,
    horario: string
    day: "DOMINGO" | "SEGUNDA-FEIRA" | "TERÇA-FEIRA" | "QUARTA-FEIRA" | "QUINTA-FEIRA" | "SEXTA-FEIRA" | "SÁBADO"
    turma: string
}

export type getAllFromSheetResponse = I_Tempo_WITHOUT_ENCODING[][][]