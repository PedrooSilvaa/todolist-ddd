export default class GetTaskById{
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }

    async execute(id){
        const task = await this.taskRepository.getById(id);
        return task;
    }
}