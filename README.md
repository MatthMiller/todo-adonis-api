# 📃 API - Lista de Tarefas

API simples de lista de tarefas (Todo List) desenvolvida com AdonisJS e SQLite.

## Rotas

- `GET /`: Retorna todas as tarefas.
- `GET /:id`: Retorna uma tarefa específica, identificada pelo ID.
- `POST /`: Cria uma nova tarefa. Os detalhes são informados no body da requisição.
- `PUT /:id`: Atualiza uma tarefa existente, identificada pelo ID. Os detalhes são informados no body da requisição.
- `DELETE /:id`: Exclui uma tarefa específica, identificada pelo ID.

## Como rodar a API

```bash
git clone https://github.com/MatthMiller/todo-adonis-api.git
cd https://github.com/MatthMiller/todo-adonis-api.git
node ace migration:run
npm run dev
```

## Conceitos explorados

- Models, Controllers, Router, Migrations
- Validators com VineJS
- Lucid ORM
- Comandos Ace
