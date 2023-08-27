# Documentação da API

Esta documentação descreve as rotas e funcionalidades da API.

## Base URL

`https://api.exemplo.com`

## Rotas

### 1. Obter todos os tempos de uma turma

- **Método:** GET
- **Rota:** `/all/:turma`
- **Descrição:** Obtém os tempos de toda a semana para a turma especificada.
- **Parâmetros:**
  - `:turma` (parâmetro de caminho) - Número da turma (entre 1001 e 3002).

### 2. Obter array de avisos

- **Método:** GET
- **Rota:** `/aviso/`
- **Descrição:** Retorna um array contendo todos os avisos disponíveis.

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

## Respostas

### Sucesso 1: Obter todos os tempos de uma turma

- **Código:** 200

### Sucesso 2: Obter array de avisos

- **Código:** 200

### Sucesso 3: Adicionar um aviso

- **Código:** 201

### Erro 1: Turma não encontrada

- **Código:** 404

### Erro 2: Dados inválidos ao adicionar aviso

- **Código:** 400

## Considerações Finais

Certifique-se de fazer as requisições corretamente de acordo com a documentação fornecida. Em caso de dúvidas ou problemas, entre em contato com o suporte da API.
