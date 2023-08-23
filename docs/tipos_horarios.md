# Tipo de Dados: Tempo

O tipo `Tempo` é usado para representar os diferentes horários ao longo do dia, como aulas, intervalos e pausas para refeições. Cada objeto `Tempo` possui as seguintes propriedades:

- `horario` (string): O horário no qual o evento ocorre, no formato de string.

- `materia` (string): A matéria associada ao evento. Para tempos de aula normais (`type: 'common'`), essa propriedade identifica a matéria sendo ministrada. Para intervalos e pausas para refeições (`type: 'break'`), ela identifica o lanche ou a refeição.

- `professor` (string): O nome do professor responsável pelo evento. Esta propriedade está presente somente nos tempos de aula normais.

- `sala` (string): O número da sala onde o evento ocorre. Esta propriedade está presente somente nos tempos de aula normais.

- `type` ('common' | 'break'): Indica o tipo de evento. Para tempos de aula normais, o valor é `'common'`, enquanto para intervalos e pausas para refeições, o valor é `'break'`.

Quando o valor de `type` é `'common'`, todas as propriedades (`horario`, `materia`, `professor` e `sala`) estarão presentes e terão informações relevantes. Quando o valor de `type` é `'break'`, apenas as propriedades `horario` e `materia` estarão presentes, representando intervalos ou pausas.

## Exemplo de Uso

```javascript
// Exemplo de um tempo de aula
const aulaNormal = {
  horario: "09:00",
  materia: "Matemática",
  professor: "Prof. Silva",
  sala: "A101",
  type: 'common'
};

// Exemplo de um intervalo para lanche
const intervaloLanche = {
  horario: "8:40 - 8:55",
  materia: "Lanche da Manhã",
  type: 'break'
};

// Exemplo de um almoço
const almoco = {
  horario: "12:15 - 13:25",
  materia: "Almoço",
  type: 'break'
};
