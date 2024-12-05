import express from 'express';
import MySQLTaskRepository from '../infrastructure/persistence/MySQLTaskRepository.js';
import CreateTask from '../../application/usecases/CreateTask.js';
import TaskController from '../controllers/TaskController.js';
import GetAllTask from '../../application/usecases/GetAllTask.js';

const router = express.Router();

const taskRepository = new MySQLTaskRepository();
const createTask = new CreateTask(taskRepository);
const getAllTask = new GetAllTask(taskRepository);
const taskController = new TaskController(createTask, getAllTask);

router.post('/tasks/:idUser', (req, res) => taskController.createTasks(req, res));
router.get('/tasks', (req, res) => taskController.getAll(req, res));

export default router;
