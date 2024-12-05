import express from 'express';
import UserController from '../controllers/UserController.js';
import GetAllUsers from '../../application/usecases/getAllUsers.js';
import GetUserById from '../../application/usecases/GetById.js';
import MySQLUserRepository from '../infrastructure/persistence/MySQLUserRepository.js';
import CreateUser from '../../application/usecases/CreateUser.js';
import DeleteById from '../../application/usecases/DeleteById.js';
import UpdateUser from '../../application/usecases/UpdateUser.js';

const router = express.Router();

const userRepository = new MySQLUserRepository();
const getAllUsers = new GetAllUsers(userRepository);
const getUserById = new GetUserById(userRepository);
const deleteUserById = new DeleteById(userRepository);
const createUser = new CreateUser(userRepository);
const updateUser = new UpdateUser(userRepository);
const userController = new UserController(getAllUsers, getUserById, createUser, deleteUserById, updateUser);

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.post('/users', (req, res) => userController.create(req, res));
router.delete('/users/:id', (req, res) => userController.deleteUserById(req, res));
router.put('/users/:id', (req, res) => userController.updateUserById(req, res));
export default router;
