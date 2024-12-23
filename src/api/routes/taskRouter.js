import express from 'express';
import MySQLTaskRepository from '../infrastructure/persistence/MySQLTaskRepository.js';
import CreateTask from '../../application/usecases/CreateTask.js';
import TaskController from '../controllers/TaskController.js';
import GetAllTask from '../../application/usecases/GetAllTask.js';
import GetAllByUser from '../../application/usecases/GetAllByUser.js';
import DeleteTaskById from '../../application/usecases/DeleteTaskById.js';
import UpdateById from '../../application/usecases/UpdateById.js';
import GetTaskById from '../../application/usecases/GetTaskById.js';

const router = express.Router();

const taskRepository = new MySQLTaskRepository();
const createTask = new CreateTask(taskRepository);
const getAllTask = new GetAllTask(taskRepository);
const getAllByUser = new GetAllByUser(taskRepository);
const deleteById = new DeleteTaskById(taskRepository);
const updateById = new UpdateById(taskRepository);
const getTaskById = new GetTaskById(taskRepository);
const taskController = new TaskController(createTask, getAllTask, getAllByUser, deleteById, updateById, getTaskById);

router.post('/tasks/:idUser', (req, res) => taskController.createTasks(req, res));
router.get('/tasks', (req, res) => taskController.getAll(req, res));
router.get('/tasks/idUser/:idUser', (req, res) => taskController.getAllByUser(req, res));
router.delete('/tasks/:id', (req, res) => taskController.delete(req, res));
router.put('/tasks/:id', (req, res) => taskController.update(req, res));
router.get('/tasks/:id', (req, res) => taskController.getById(req, res));

export default router;
