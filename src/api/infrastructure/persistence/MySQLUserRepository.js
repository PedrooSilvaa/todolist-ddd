import UserRepository from '../../../domain/repositories/UserRepository.js';
import User from '../../../domain/models/UserModel.js';

class MySQLUserRepository extends UserRepository {
  async getAll() {
    return await User.findAll();
  }
}

export default MySQLUserRepository;
