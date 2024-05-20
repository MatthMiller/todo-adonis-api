# 📃 API - Lista de Tarefas

API simples de lista de tarefas (Todo List) desenvolvida com AdonisJS e SQLite.

## Rotas

- `GET /`
  <p>Retorna todas as tarefas.</p>
- `GET /:id`
  <p>Retorna uma tarefa específica.</p>
- `POST /`
  <p>Cria uma nova tarefa. Os valores são informados no body da requisição.</p>
- `PUT /:id`
  <p>Atualiza uma tarefa existente. Os valores são informados no body da requisição.</p>
- `DELETE /:id`
  <p>Exclui uma tarefa específica.</p>

## Como rodar a API

```bash
git clone https://github.com/MatthMiller/todo-adonis-api.git
```

```bash
cd https://github.com/MatthMiller/todo-adonis-api.git
```

```bash
npm install
```

```bash
node ace migration:run
```

```bash
npm run dev
```

## Conceitos explorados

- Models, Controllers, Router, Migrations
- Validators com VineJS
- Lucid ORM
- Comandos Ace

```

```
