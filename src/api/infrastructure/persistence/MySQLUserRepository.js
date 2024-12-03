import UserRepository from '../../../domain/repositories/UserRepository.js';
import User from '../../../domain/models/UserModel.js';

class MySQLUserRepository extends UserRepository {
  async getAll() {
    return await User.findAll();
  }

  async getById(id) {
    try {
      const user = await User.findOne({
        where: { id: id }  // Filtrando o usuário pelo ID
      });
      return user;  // Retorna o usuário encontrado
    } catch (error) {
      throw new Error('Error fetching user by ID: ' + error.message);  // Tratamento de erro
    }
  }
}

export default MySQLUserRepository;
