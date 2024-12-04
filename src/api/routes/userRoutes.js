import express from 'express';
import UserController from '../controllers/UserController.js';
import GetAllUsers from '../../application/usecases/getAllUsers.js';
import GetUserById from '../../application/usecases/GetById.js';
import MySQLUserRepository from '../infrastructure/persistence/MySQLUserRepository.js';
import CreateUser from '../../application/usecases/CreateUser.js';

const router = express.Router();

const userRepository = new MySQLUserRepository();
const getAllUsers = new GetAllUsers(userRepository);
const getUserById = new GetUserById(userRepository);
const createUser = new CreateUser(userRepository);
const userController = new UserController(getAllUsers, getUserById, createUser);

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.post('/users', (req, res) => userController.create(req, res));

export default router;
