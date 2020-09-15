import { Router, Request, Response } from "express";
import { getTasks, saveTask, getTaskId, updateTask, finishedTask, removeTask } from './controller/TasksController'

const routes = Router();

routes.get('/', (req: Request, response: Response) => {
    return response.json({ message: 'API ON!' })
})

routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getTaskId)
routes.post('/tasks', saveTask)
routes.put('/tasks/:id', updateTask)
routes.patch('/tasks/:id', finishedTask)
routes.delete('/tasks/:id', removeTask)

export default routes;