<!-- ## Como funciona a integração entre esse servidor e o client:
#### Para integrar o google sheets com a aplicação e o servidor, deve se utilizar conversores.

##### Infelizmente só há um conversor no client-side em HTML puro -- tal que, numa planilha exemplificada, dá o seguinte output:
```json
[
  {
    "SEGUNDA-FEIRA PB": [
      {
        "__EMPTY": "SEGUNDA- FEIRA"
      },
      {
        "__EMPTY_1": 1001,
        "__EMPTY_2": 1002,
        "__EMPTY_3": 1003,
        "__EMPTY_4": 1004,
        "__EMPTY_5": 2001,
        "__EMPTY_6": 2002,
        "__EMPTY_7": 2003,
        "__EMPTY_8": 2004,
        "__EMPTY_9": 3001,
        "__EMPTY_10": 3002,
        "__EMPTY_11": 3003,
        "__EMPTY_12": 3004
      },
      {
        "__EMPTY": "7:00 - 7:50",
        "__EMPTY_1": "Lab. Linguagens  Maiara                  Sala 45",
        "__EMPTY_2": "Geografia Adriana        Sala 44",
        "__EMPTY_3": "Língua Portuguesa Rosa                          Sala 34",
        "__EMPTY_4": "Matemática Marcelo.                       Sala 33",
        "__EMPTY_5": "Lab. Ciên. Natureza      Andrea                               Sala 42",
        "__EMPTY_6": "Desig. Interação          Luana                   Lab. 22",
        "__EMPTY_7": "Lab Matemática   Suzana                     Sala 43",
        "__EMPTY_8": "Química        Sérgio             Sala 41",
        "__EMPTY_9": "3 D                Nathan                     Lab 21",
        "__EMPTY_10": "Sociologia Taiguara                 Sala 31",
        "__EMPTY_11": "Filosofia               Diogo                   Sala 32"
      },
      {
        "__EMPTY": "7:50 - 8:40",
        "__EMPTY_1": "Lab. Linguagens  Maiara                  Sala 45",
        "__EMPTY_2": "Geografia Adriana                       Sala 44",
        "__EMPTY_3": "Língua Portuguesa Rosa                        Sala 34",
        "__EMPTY_4": "Matemática Marcelo.                  Sala 33",
        "__EMPTY_5": "Lab. Ciên. Natureza       Andrea                      Sala 42",
        "__EMPTY_6": "Desig. Interação          Luana                   Lab. 22",
        "__EMPTY_7": "Lab Matemática   Suzana                     Sala 43",
        "__EMPTY_8": "Química             Sérgio                    Sala 41",
        "__EMPTY_9": "3 D                     Nathan                           Lab 21",
        "__EMPTY_10": "Sociologia Taiguara                 Sala 31",
        "__EMPTY_11": "Filosofia              Diogo                   Sala 32"
      },
      {
        "__EMPTY": "LANCHE - 8:40 - 8:55"
      },
      {
        "__EMPTY": "8:55 - 9:45",
        "__EMPTY_1": "Lab. Linguagens  Maiara                  Sala 45",
        "__EMPTY_2": "Língua Portuguesa Rosa                       Sala 34",
        "__EMPTY_3": "Lab Matemática Marcelo.                        Sala 33 ",
        "__EMPTY_4": "Cult.Jogos Luana                   Lab. 22",
        "__EMPTY_5": "Geografia Adriana                 Sala 44",
        "__EMPTY_6": "Lab. Ciên. Natureza    Andrea                    Sala 42",
        "__EMPTY_7": "Cult.Jogos Fabri.                            Lab. 35",
        "__EMPTY_8": "Lab Matemática   Suzana                     Sala 43",
        "__EMPTY_9": "Sociologia Taiguara                    Sala 31",
        "__EMPTY_10": "Filosofia               Diogo                   Sala 33",
        "__EMPTY_11": "Oficina Integ. Nathan                Lab. 36",
        "__EMPTY_12": "Química           Sérgio                  Sala 41",
        "__EMPTY_17": " "
      },
      {
        "__EMPTY": "9:45 - 10:35",
        "__EMPTY_1": "Oficina Integ. Michele                     Lab. 21",
        "__EMPTY_2": "Língua Portuguesa Rosa                       Sala 34",
        "__EMPTY_3": "Lab Matemática Marcelo.                     Sala 33 ",
        "__EMPTY_4": "Cult.Jogos Luana                    Lab. 22",
        "__EMPTY_5": "Geografia Adriana                     Sala 44",
        "__EMPTY_6": "Lab. Ciên. Natureza  Andrea                 Sala 42",
        "__EMPTY_7": "Cult.Jogos Fabri.                    Lab. 35",
        "__EMPTY_8": "Lab Matemática   Suzana                     Sala 43",
        "__EMPTY_9": "Sociologia Taiguara                   Sala 31",
        "__EMPTY_10": "Filosofia              Diogo                   Sala 33",
        "__EMPTY_11": "Oficina Integ. Nathan                    Lab. 36",
        "__EMPTY_12": "Química          Sérgio                 Sala 41"
      },
      {
        "__EMPTY": "10:35 - 11:25",
        "__EMPTY_1": "Oficina Integ. Michele         Lab. 21",
        "__EMPTY_2": "Oficina Integ. Luana               Lab. 22",
        "__EMPTY_3": "Oficina Integ. Nathan             Lab. 36",
        "__EMPTY_4": "Oficina Integ. Fabri                   Lab. 35",
        "__EMPTY_5": "Biologia                  Andrea                   sala 42",
        "__EMPTY_6": "Geografia Adriana                    Sala 44",
        "__EMPTY_7": "Arte.                      Maiara                      Sala 45",
        "__EMPTY_8": "Lab. Ciên. Natureza MC Sala 43",
        "__EMPTY_9": "Filosofia               Diogo                    Sala 32",
        "__EMPTY_10": "Química           Sérgio                         Sala 41",
        "__EMPTY_11": "Sociologia Taiguara                 Sala 31",
        "__EMPTY_12": "Matemática Marcelo.                       Sala 33"
      },
      {
        "__EMPTY": "11:25 - 12:15",
        "__EMPTY_1": "Oficina Integ. Michele            Lab. 21",
        "__EMPTY_2": "Oficina Integ. Luana                          Lab. 22",
        "__EMPTY_3": "Oficina Integ. Nathan                   Lab. 36",
        "__EMPTY_4": "Oficina Integ. Fabri                                Lab. 35",
        "__EMPTY_5": "Biologia                    Andrea                Sala 42",
        "__EMPTY_6": "Geografia Adriana                    Sala 44",
        "__EMPTY_7": "Arte.                       Maiara                      sala 45",
        "__EMPTY_8": "Lab. Ciên. Natureza MC Sala 43",
        "__EMPTY_9": "Filosofia                Diogo                          Sala 32",
        "__EMPTY_10": "Química          Sérgio                    Sala 41",
        "__EMPTY_11": "Sociologia Taiguara                           Sala 31",
        "__EMPTY_12": "Matemática Marcelo.                       Sala 33"
      },
      {
        "__EMPTY": "ALMOÇO - 12:25 - 13:25"
      },
      {
        "__EMPTY": "13:25 - 14:15",
        "__EMPTY_1": "Lab Matemática Marcelo.                     Sala 33 ",
        "__EMPTY_2": "Oficina Integ. Luana                    Lab. 22",
        "__EMPTY_3": "Filosofia. Mariana                       Sala 44",
        "__EMPTY_4": "Lógica de Program. Nathan                 Lab 36",
        "__EMPTY_5": "Ref. escolar                  Rose                    Sala 34",
        "__EMPTY_6": "Estu. orient.                    M. Cristina                   Sala 43",
        "__EMPTY_7": "Proj. de Vida João                 Espaço Z",
        "__EMPTY_8": "Lab Matemática   Suzana                     Sala 31 ",
        "__EMPTY_9": "Química     Sérgio              Sala 41",
        "__EMPTY_10": "Matemática. Ernani.                  Sala 31",
        "__EMPTY_11": "Biologia           Andrea             Sala 42",
        "__EMPTY_12": "Oficina Integ. Jamv                      Lab. 35"
      },
      {
        "__EMPTY": "14:15 - 15:05",
        "__EMPTY_1": "Lab Matemática Marcelo.                     Sala 33 ",
        "__EMPTY_2": "Lab. Linguagens  Maiara                  Sala 45",
        "__EMPTY_3": "Filosofia. Mariana                       Sala 44",
        "__EMPTY_4": "Lógica de Program. Nathan                    Lab 36",
        "__EMPTY_5": "Estu. orient.                    M. Cristina                   Sala 43",
        "__EMPTY_6": "Ref. escolar                  Rose                    Sala 34",
        "__EMPTY_7": "Proj. de Vida João                 Espaço Z",
        "__EMPTY_8": "Lab Matemática   Suzana                     Sala 31 ",
        "__EMPTY_9": "Química           Sérgio                  Sala 41",
        "__EMPTY_10": "Matemática. Ernani.                      Sala 31",
        "__EMPTY_11": "Biologia                Andrea                 Sala 42",
        "__EMPTY_12": "Oficina Integ. Jamv                     Lab. 35"
      },
      {
        "__EMPTY": "LANCHE - 15:05 - 15:20"
      },
      {
        "__EMPTY": "15:20 - 16:10",
        "__EMPTY_1": "Int. Mídias Digitais Michele Lab 21",
        "__EMPTY_2": "Lab. Linguagens  Maiara                  Sala 45",
        "__EMPTY_3": "Lógica de Program.                  Fabri                  Lab 35",
        "__EMPTY_4": "Filosofia. Mariana                       Sala 44",
        "__EMPTY_5": "Oficina Integ. Luana              Lab. 22",
        "__EMPTY_6": "Biologia              Andrea                     Sala 42             ",
        "__EMPTY_7": "Lab. Ciên. Natureza MC Sala 43",
        "__EMPTY_8": "Proj. de Vida João                   Espaço Z",
        "__EMPTY_9": "Matemática. Ernani.                Sala 32",
        "__EMPTY_10": "Ens. Religioso Rose  Biblioteca",
        "__EMPTY_11": "Ens. Religioso Rose  Biblioteca",
        "__EMPTY_12": "Filosofia                Diogo                    Sala 31"
      },
      {
        "__EMPTY": "16:10 - 17:00",
        "__EMPTY_1": "Int. Mídias Digitais Michele Lab 21",
        "__EMPTY_2": "Lab. Linguagens Maiara                    Sala 45",
        "__EMPTY_3": "Lógica de Program.                Fabri                Lab 35",
        "__EMPTY_4": "Filosofia. Mariana                       Sala 44",
        "__EMPTY_5": "Oficina Integ. Luana                     Lab. 22",
        "__EMPTY_6": "Biologia                    Andrea                 Sala 42",
        "__EMPTY_7": "Lab. Ciên. Natureza MC Sala 43",
        "__EMPTY_8": "Proj. de Vida João                    Espaço Z",
        "__EMPTY_9": "Matemática. Ernani.                Sala 32",
        "__EMPTY_10": "Matemática Marcelo Sala 44",
        "__EMPTY_12": "Filosofia                Diogo                      Sala 31"
      },
      {
        "__EMPTY_3": 0.375
      }
    ]
  },
  // TERÇA-FEIRA A SEXTA etc...
]
```

#### Perceba que há objetos com as propriedades `"__EMPTY_"` seguida de um número. Perceba também que, aquelas células que estão vazias(significando os tempos livres de aula) não entram nos objetos(são descartadas). Para fixar isso, deve-se notar que cada índice na chave do objeto representa uma turma:

1: 1001,
2: 1002,
3: 1003,
4: 1004,
5: 2001,
6: 2002,
7: 2003,
8: 2004,
9: 3001,
10: 3002,
11: 3003,
12: 3004.

#### Então, para encontrar as turmas deve-se utilizar desses índices. Note-se também que a key `"__EMPTY_"` sem um número em seguida representa o horário.

#### Então, portanto, para getar os tempos de uma turma, deve-se utilizar dos índices para encontrar o tempo em questão. -->

DEPRECEATED!