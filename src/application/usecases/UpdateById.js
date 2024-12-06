export default class UpdateById{
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }

    async execute(id, task){
        const tasks = this.taskRepository.updateById(id, task);
        return tasks;
    }
}