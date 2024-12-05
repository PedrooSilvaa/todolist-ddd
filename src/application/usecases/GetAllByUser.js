export default class GetAllByUser{
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }

    async execute(id){
        const tasks = await this.taskRepository.getAllByUser(id);
        return tasks;
    }
}