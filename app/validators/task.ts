import vine from '@vinejs/vine'

// https://docs.adonisjs.com/guides/basics/validation

export const taskRequestIntegrity = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(1).maxLength(150),
    description: vine.string().trim().minLength(1).maxLength(500),
    isCompleted: vine.boolean(),
  })
)
