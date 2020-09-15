import { getRepository } from 'typeorm'
import { Tasks } from '../entity/Tasks'
import { Request, Response } from 'express'

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await getRepository(Tasks).find()
  return res.json(tasks);
}

export const getTaskId = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).findOne(req.params.id)
  return res.json(task);
}

export const saveTask = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).save(req.body)
  return res.json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).update(req.params.id, req.body)

  if(task.affected > 0) {
    const taskUpdate = await getRepository(Tasks).findOne(req.params.id)
    return res.json(taskUpdate)
  }

  return res.status(404).json({ message: 'Task not found!' })
}

export const finishedTask = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).update(req.params.id, {
    finished: true
  })

  if(task.affected > 0) {
    return res.json({ message: 'Task finished!'})
  }

  return res.status(404).json({ message: 'Task not found!' })
}

export const removeTask = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).delete(req.params.id)

  if(task.affected > 0) {
    return res.json({ message: 'Task deleted!'})
  }

  return res.status(404).json({ message: 'Task not found!' })
}