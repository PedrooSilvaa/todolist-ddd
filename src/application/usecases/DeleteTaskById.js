export default class DeleteTaskById{
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }

    async execute(id){
        const task = await this.taskRepository.deleteById(id);
        return task;
    }
}