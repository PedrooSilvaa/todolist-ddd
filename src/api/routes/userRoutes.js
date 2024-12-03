import express from 'express';
import UserController from '../controllers/UserController.js';
import GetAllUsers from '../../application/usecases/GetAllUsers.js';
import MySQLUserRepository from '../infrastructure/persistence/MySQLUserRepository.js';

const router = express.Router();

// Configuração das dependências
const userRepository = new MySQLUserRepository();
const getAllUsers = new GetAllUsers(userRepository);
const userController = new UserController(getAllUsers);

// Definindo a rota GET para buscar todos os usuários
router.get('/users', (req, res) => userController.getAll(req, res));

export default router;
