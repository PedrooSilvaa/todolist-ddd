class GetAllUsers {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute() {
      const users = await this.userRepository.getAll();
      return users;
    }
  }
  
  export default GetAllUsers;
  