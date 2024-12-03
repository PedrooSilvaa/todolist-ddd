class GetById {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(id) {
      const users = await this.userRepository.getById(id);
      return users;
    }
  }
  
  export default GetById;
  