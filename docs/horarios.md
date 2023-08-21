## Como funciona os tempos:
### Nome: Irrelevante
#### Data

- **[0]**: Uma array que sempre contém o nome do dia no índice 0, com exceção de segunda feira!! que está no indice 1.
  - É bom remover os espaços usando `replace`.

- **[1]**: Array de turmas (as linhas da planilha).
  - O índice 0 é `null`.
  - Os índices de `[1]` até `[12]` contêm as turmas de 1002 até 3004.

- A partir do índice **[2]**(ou 3, para segundas feiras): Array que contém os tempos, sendo uma array de strings.
  - O índice 0 sempre é o tempo, ex: `1° | 7:00 às 7:50`.
  - Os outros índices são tempos, seguindo as colunas das turmas (ex: `[1] = 1001`, `[2] = 1002`, ...).
  - Note os espaços que acontecem devido à formatação do documento. É recomendado formatar utilizando uma função do GPT para economizar tempo.

  - **Importante**: A partir disso, os períodos Lanche 1, Almoço e Lanche 2 são, respectivamente, nos índices `[2]`, `[7]` e `[10]`.

- Depois de terminar todos os tempos (no índice `[12]`), há uma série de arrays vazias. (Não sei o motivo disso).


______________________________-

### Comunicação
Para ser funcional, a comunicação entre o App e a API deve ser da seguinte forma: O App, durante seu início, envia uma requisição, enviando a turma como parâmetro. Assim, portanto, utilizando também da data(não sei se sempre serão sincronizadas, se não, sincronizar) para mandar a resposta com a array de tempos correspondente a turma.

(Não se esquecer da questão que, no App, deve ter algum arquivo interno que funcione offline como um backup para caso a API estiver offline.)
