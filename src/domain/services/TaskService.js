class TaskService{
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }

    async createUser(task){
        return await this.taskRepository.createUser(task);
    }

    async getAll(){
        return await this.taskRepository.getAll();
    }

    async getAllByUser(id){
        return await this.taskRepository.getAllByUser(id)
    }

    async deleteById(id){
        return await this.taskRepository.deleteById(id)
    }

    async updateById(id, task){
        return await this.taskRepository.updateById(id, task);
    }
}