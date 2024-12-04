class DeleteById{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(id){
        const userResponse = this.userRepository.deleteById(id);
        return userResponse;
    }
}

export default DeleteById;