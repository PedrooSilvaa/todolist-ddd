import express from 'express';
import MySQLTaskRepository from '../infrastructure/persistence/MySQLTaskRepository.js';
import CreateTask from '../../application/usecases/CreateTask.js';
import TaskController from '../controllers/TaskController.js';

const router = express.Router();

const taskRepository = new MySQLTaskRepository();
const createTask = new CreateTask(taskRepository);
const taskController = new TaskController(createTask);

router.post('/tasks/:idUser', (req, res) => taskController.createTasks(req, res));
export default router;
