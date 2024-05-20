import Task from '#models/task'
import { taskRequestIntegrity } from '#validators/task'
import type { HttpContext } from '@adonisjs/core/http'

// https://docs.adonisjs.com/guides/basics/request
// https://docs.adonisjs.com/guides/basics/response

export default class TasksController {
  async viewAllTasks() {
    return await Task.query().orderBy('created_at', 'asc').exec()
  }

  async viewOneTask(ctx: HttpContext) {
    const taskId = ctx.request.param('id')
    return await Task.findByOrFail('id', taskId)
  }

  async createTask(ctx: HttpContext) {
    const incomingTask = ctx.request.only(['title', 'description', 'isCompleted'])
    await taskRequestIntegrity.validate(incomingTask)
    const createdTask = await Task.create(incomingTask)
    return createdTask
  }

  async updateTask(ctx: HttpContext) {
    const { request } = ctx
    const taskId = request.param('id')
    const incomingTask = request.only(['title', 'description', 'isCompleted'])
    await taskRequestIntegrity.validate(incomingTask)

    const taskToUpdate = await Task.findByOrFail('id', taskId)
    await taskToUpdate.merge(incomingTask).save()
    return { message: 'Task succesfully updated!', updatedTask: taskToUpdate }
  }

  async deleteTask(ctx: HttpContext) {
    const taskToDelete = await Task.findByOrFail('id', ctx.request.param('id'))
    await taskToDelete.delete()
    return { message: 'Task succesfully deleted!' }
  }
}
