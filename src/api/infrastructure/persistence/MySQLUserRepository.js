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

  async deleteById(id){
    try{
      const userExist = await this.getById(id);
      if(!userExist){
        return null;
      }
      await User.destroy({
        where: {id: id}
      });
      return "User deleting successfully";
    } catch(error){
      throw new Error('Error deleting user by ID: ' + error.message); 
    }
  } 

  async updateUser(id, user){
    try{
      const userResponse = await User.update(
        {
          nome: user.nome,
          email: user.email
        },
        {
          where: { id: id }
        }
      )
      return this.getById(id);
    } catch(error){
      throw new Error('Error updating user by ID: ' + error.message);
    }
  }
}

export default MySQLUserRepository;
