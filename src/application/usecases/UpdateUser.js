class UpdateUser {
    constructor(userRepository) {
    this.userRepository = userRepository;
}

    async execute(id, user) {
        const users = await this.userRepository.updateUser(id, user);
        return users;
    }
}

export default UpdateUser;
