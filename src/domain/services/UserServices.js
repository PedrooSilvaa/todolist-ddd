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
}

export default UserService;