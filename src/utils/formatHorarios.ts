export type Tempo = {
    horario: string,
    materia: string,
    professor: string,
    sala: string,
    isBreak: boolean,
} | null

// export default function formatHorarios(formatHorarios: string) {
//     const data = JSON.parse(formatHorarios)
// }





// OBS: NAO ESTA PERFEITO EX:
// {
//     "materia": "Lab.",
//     "professor": "Ciên. Natureza Andrea",
//     "sala": "Sala 42"
// }
// {
//     "materia": "Língua",
//     "professor": "Portuguesa Rosa",
//     "sala": "Sala 34"
// }

export function getTempo(item: string, horario: string): Tempo | unknown {
    if (item === null) {
        return null; // Keep null entries unchanged
    }
    try {
        const cleanedItem = item.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with a single space
        const parts = cleanedItem.split(' ');

        const materia: string = parts[0];
        const professor: string = parts.slice(1, -2).join(' ');
        const sala: string = parts[parts.length - 2] + ' ' + parts[parts.length - 1];
        const isBreak: boolean = false
        return { horario, materia, professor, sala, isBreak };
    } catch (error) {
        return null
    }
}

export function getIndex(data: any): number {
    if (getName(data) === 'SEGUNDA-FEIRA') {
        return 1
    }
    return 0
}

// export function getHorario(data: any) {

// }

export function getName(data: any): string {
    if (data.data[0].length > 0) {
        let name: string = data.data[0][0];
        for (let index = 0; name.includes(" "); index++) {
            name = name.replace(" ", "").replace("  ", "").replace("  ", "").replace(" ", "")
        }
        return name.toUpperCase()
    }
    console.log(data.data[1][0].replace(" ", "").toUpperCase())
    return data.data[1][0].replace(" ", "").toUpperCase()
} 