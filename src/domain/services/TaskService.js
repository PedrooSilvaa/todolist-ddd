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
}