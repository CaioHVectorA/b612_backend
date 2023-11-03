//@ts-nocheck
export type Tempo = {
    tempo: {
        horario: string;
        materia: string;
        professor: string;
        sala: string;
        isBreak: boolean;
    };
    turma: string;
    id: string
};
export function getTempo(item: string, horario: string): Tempo | unknown {
    if (item === null) {
        return null; // Keep null entries unchanged
    }
    try {
        const cleanedItem = item.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with a single space
        const count = cleanedItem.split(' ').length
        const isLibrary = cleanedItem.toUpperCase().includes("BIBLIO") ||
        cleanedItem.toUpperCase().includes("AUDIT") ||
        cleanedItem.toUpperCase().includes("CONVIV") ||
        cleanedItem.toUpperCase().includes("GERMIN") ? 1 : 0
        const splitted: string[] = cleanedItem.split(' ')
        let materiaArr = []
        for (let i = 0; i < count - 3 + isLibrary; i++) {
            materiaArr.push(splitted[i])
        }
        const materia = materiaArr.join(' ')
        const professor: string = splitted[count - 3 + isLibrary];
        let sala: string;
        if (isLibrary) {
            sala = splitted[count - 1]
        } else {
            sala = splitted[splitted.length - 2] + ' ' + splitted[splitted.length - 1];
        }
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
    return data.data[1][0].replace(" ", "").toUpperCase()
} 