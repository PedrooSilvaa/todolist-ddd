import UserRepository from '../../../domain/repositories/UserRepository.js';
import User from '../../../domain/models/UserModel.js';

class MySQLUserRepository extends UserRepository {
  async getAll() {
    return await User.findAll();
  }

  async getById(id) {
    try {
      const user = await User.findOne({
        where: { id: id }  
      });
      return user; 
    } catch (error) {
      throw new Error('Error fetching user by ID: ' + error.message); 
    }
  }

  async createUser(user){
    const users = await User.create(user);
    return users;
  }
}

export default MySQLUserRepository;
