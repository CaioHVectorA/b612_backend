# Documentação da API

Esta documentação descreve as rotas e funcionalidades da API.

## Base URL

`https://api.exemplo.com`

## Rotas

### 1. Obter todos os tempos de uma turma

- **Método:** GET
- **Rota:** `/horario/:turma`
- **Descrição:** Obtém os tempos de toda a semana para a turma especificada, em uma Array(Array mestre) que contém os dias com os objetos de tempos
- **Parâmetros:**
  - `:turma` (parâmetro de caminho) - Número da turma (entre 1001 e 3004).

- **Exemplo:**
  ```JSON
  [
  [
    {
      "tempo": {
        "horario": "7:00 - 7:50", // Range de horário
        "materia": "LÍNG. PORT", // Nome da matéria.
        "professor": "ÁUREA", // Nome do professor.
        "sala": "SALA 44", // Locação
        "isBreak": false // true/false para lanche/almoço
      },
      "id": "935ce9ff-11c6-44c0-94f1-9fc05d75ef16", // uuid único para dar um find nas notas
      "turma": "3002" // turma para filtragem
    },
    //...Outros tempos deste dia
    ]
    //...Outros dias
    ]
### 2. Obter array de avisos

- **Método:** GET
- **Rota:** `/aviso/`
- **Descrição:** Retorna um array contendo todos os avisos disponíveis. Os filtros são feitos client-side devido as regras de negócio.

### 3. Adicionar um aviso

- **Método:** POST
- **Rota:** `/aviso/`
- **Descrição:** Adiciona um novo aviso ao banco de dados.
- **Parâmetros no Corpo da Requisição:**
  - `author` (string) - Nome do autor do aviso.
  - `title` (string) - Título do aviso.
  - `body` (string) - Conteúdo do aviso.
  - `img` (string) - URL da imagem associada ao aviso.
  - `tags` (string) - Tags relacionadas ao aviso, separadas por vírgulas.

### 4. Editar os horários

- **Método:** POST
- **Rota:** `/horario/edit`
- **Descrição:** Edita os horários da turma no banco de dados.
- **Middleware de Autorização:** `authorize` - Este endpoint requer autenticação.

- **Parâmetros no Corpo da Requisição:**
  - `dados` (object) - Objeto contendo os dados a serem editados. O objeto é provindo de uma conversão de XLSX para JSON, portanto, gigantesco.
- **Middleware de Autenticação:**
  - `authorize` - Usado para garantir que apenas usuários autenticados possam acessar este endpoint. O token de autenticação é obtido durante login!

### 5. Obter horário por ID

- **Método:** GET
- **Rota:** `/horario/id/:id`
- **Descrição:** Obtém as informações do horário com o ID especificado.
- **Parâmetros:**
  - `:id` (parâmetro de caminho) - ID único identificando o horário.

- **Exemplo de Resposta**
  ```JSON
  // URL: /horario/id/935ce9ff-11c6-44c0-94f1-9fc05d75ef16
  {
    "tempo": {
      "horario": "7:50 - 8:40",
      "materia": "MATEMÁTICA",
      "professor": "CARLOS",
      "sala": "SALA 32",
      "isBreak": false
    },
    "id": "935ce9ff-11c6-44c0-94f1-9fc05d75ef16",
    "turma": "3002"
  }

### 6. Obter todos os tempos de um professor

- **Método:** GET
- **Rota:** `/horario/prof/:prof`
- **Descrição:** Obtém todos os tempos de um professor.
- **Parâmetros:**
  - `:prof` (parâmetro de caminho) - Nome do professor.

- **Exemplo:**
  ```JSON
  [
    {
      "tempo": {
        "horario": "8:00 - 8:50",
        "materia": "MATEMÁTICA",
        "professor": "CARLOS",
        "sala": "SALA 55",
        "isBreak": true
      },
      "id": "935ce9ff-11c6-44c0-94f1-9fc05d75ef16",
      "turma": "3002"
    },
    //...Outros tempos para o professor
  ]


### 7. Obter tempos de um professor em um determinado horário

- **Método:** GET
- **Rota:** `/horario/prof/:prof/:time`
- **Descrição:** Obtém os tempos de um professor em um horário específico.
- **Parâmetros:**
  - `:prof` (parâmetro de caminho) - Nome do professor.
  - `:time` (parâmetro de caminho) - Horário desejado.

- **Exemplo:**
  ```JSON
  // horario/prof/carlos/830 (8:30 sem os dois pontos)
  [
    {
      "tempo": {
        "horario": "8:00 - 8:50",
        "materia": "MATEMÁTICA",
        "professor": "CARLOS",
        "sala": "SALA 55",
        "isBreak": true
      },
      "id": "935ce9ff-11c6-44c0-94f1-9fc05d75ef16",
      "turma": "3002"
    },
    //...Outros tempos neste horário para o professor
  ]


