import express from 'express'
import TaskController from '../controllers/TaskController';
import MySQLTaskRepository from '../infrastructure/persistence/MySQLTaskRepository';
import CreateTask from '../../application/usecases/CreateTask';



const router = express.Router();

const taskRepository = new MySQLTaskRepository();
const createTask = new CreateTask(taskRepository);
const taskController = new TaskController(createTask)

router.post('/tasks', (req, res) => taskController.createTasks(req, res));

export default router;