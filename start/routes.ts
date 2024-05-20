/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TasksController = () => import('#controllers/tasks_controller')

router.get('/', [TasksController, 'viewAllTasks'])
router.get('/:id', [TasksController, 'viewOneTask'])
router.post('/', [TasksController, 'createTask'])
router.put('/:id', [TasksController, 'updateTask'])
router.delete('/:id', [TasksController, 'deleteTask'])
