## Formatação de horários. Porque e como funciona?

### Como os horários provém de uma conversão de XLSX(excel) para JSON, os arquivos vêm sem formatação e com uma visualização ruim. Além disso, vem tudo empacotado numa só string.
#### Exemplo:
        "7:00 - 7:50",
        "Lab. Linguagens  Maiara                  Sala 45",
        "Geografia Adriana        Sala 44",
        "Língua Portuguesa Rosa                          Sala 34",
        "Matemática Marcelo.                       Sala 33",
        "Lab. Ciên. Natureza      Andrea                               Sala 42",
        "Desig. Interação          Luana                   Lab. 22",
        "Lab Matemática   Suzana                     Sala 43",
        "Química        Sérgio             Sala 41",
        "3 D                Nathan                     Lab 21",
        "Sociologia Taiguara                 Sala 31",
        "Filosofia               Diogo                   Sala 32"
    

_(Perceba os espaços completamente desproporcionais)_

Então, para proporcionar os dados de forma correta para o App, a seguinte formatação ocorre na função getTempo do formatFromSheet:
```typescript
export function getTempo(item: string, horario: string): Tempo | unknown {
    if (item === null) {
        return null;
    }
    try {
        const cleanedItem = item.replace(/\s{2,}/g, ' ');
        const count = cleanedItem.split(' ').length
        const isLibrary = cleanedItem.toUpperCase().includes('BIBLIO') ? 1 : 0
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
```
#### Ele recebe uma string, que é toda a string pertencente a um tempo.(Ex: Lab. Linguagens  Maiara                  Sala 45). E, inciialmente, se checa se é null, pois ocasionalmente há horários que, por serem vazios(os tempos livres) acabam sendo null. Se for o caso, ele continuará null, e no front end do App será ignorado. 
#### Para evitar problemas gritantes com erros, usa-se o try-catch. Dentro do bloco try, primeiramente declara-se cleanedItem, que será a correspondência da string formatada, a partir do regex, que a normaliza com apenas um espaço ao invés de inúmeros. Em seguida, declara-se count, que será de grande uso para detectar quantos espaços a string normaliza tem. 
### (Exemplo: "Lab. Linguagens Maiara Sala 45" Tem 4 Espaços)
#### O número de espaços será essencial para detectar matérias que possuem mais de uma palavra.(Melhor explicado depois). depois declara-se o isLibrary. Ele é um pequeno fix para um caso específico de matérias que tem como sala a biblioteca que, é um caso a parte; Sala 45, Lab 22, E todas as outras possíveis salas possuem espaço, já biblioteca não. Para separar as coisas, esse detalhe muda tudo. Então, se for de fato biblioteca, a variável se torna 1(mudando as operações do código), se não, se torna 0(e irrelevante)
#### Depois declara-se o splitted, que será de fato os itens separados por espaço. Agora, o próximo passo é separar *matéria*, *professor* e *sala*.
#### Declara-se uma array vazia, tal que vai ser preenchida com as palavras que constituém a matéria, usando Count como base.
### Exemplo:
### "Filosofia Diogo Sala 32" // 3 Espaços, portanto, count = 3
```typescript 
for (let i = 0; i < count - 3 + isLibrary; i++) {
    materiaArr.push(splitted[i])
}
```
### Nesse caso, o loop vai rodar uma só vez, capturando o primeiro índice da array splitted, portanto "Filosofia". Ou seja, está certo, afinal, a matéria é apenas filosofia.
### Outro exemplo:
```typescript
"Desig. Interação Luana Lab 22" // count = 4
// O loop vai rodar duas vezes, e materiaArr vai ser como:
// ["Desig", "Interação"]
// Mais uma vez, está certo. Pois...
```
#### ...Na próxima linha, declara-se a constante materia, que será uma junção de todas as strings da materiaArr(juntadas por um espaço.)
### PS: Essa é uma forma muita efetiva e a melhor possível até o momento. Porém, tem um erro: Caso o nome do professor tiver espaço(O qu eé muito raro) isso quebra o algoritmo e faz o nome do professor ir junto na matéria.(Mas não se pode ter tudo na vida...)

#### Na próxima linha, o professor é mais simples. Apenas é o índice count - 3 da array splitted. 

#### Nas próximas linhas, como parte do fix, caso a sala for biblioteca apenas é o último índice da array. Se não, é a junção dos dois últimos índices.

#### Na penúltima linha, o isBreak(que, como nas documentações passadas, indica se é lanche ou almoço) é declarado como falso, e por fim, todas os dados são retornados em forma de objeto.

