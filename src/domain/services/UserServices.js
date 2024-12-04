class UserService{
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getAll(){
        return await this.userRepository.getAll();
    }

    async getById(id){
        return await this.userRepository.getById(id);
    }

    async createUser(id){
        return await this.userRepository.createUser(user);
    }
}

export default UserService;