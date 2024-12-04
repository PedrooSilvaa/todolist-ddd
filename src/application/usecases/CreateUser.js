class CreateUser {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(user) {
      const users = await this.userRepository.createUser(user);
      return users;
    }
  }
  
  export default CreateUser;
  