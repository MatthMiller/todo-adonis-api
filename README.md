# 📃 API - Lista de Tarefas

API simples de lista de tarefas (Todo List) desenvolvida com AdonisJS e SQLite.

## Rotas

- `GET /` Retorna todas as tarefas.
- `GET /:id` Retorna uma tarefa específica.
- `POST /` Cria uma nova tarefa. Os detalhes são informados no body da requisição.
- `PUT /:id` Atualiza uma tarefa existente. Os detalhes são informados no body da requisição.
- `DELETE /:id` Exclui uma tarefa específica.

## Como rodar a API

```bash
git clone https://github.com/MatthMiller/todo-adonis-api.git
```

```bash
cd https://github.com/MatthMiller/todo-adonis-api.git
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
