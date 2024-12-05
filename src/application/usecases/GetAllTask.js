export default class GetAllTask{
    constructor(taskRepository){
        this.taskRepository = taskRepository;
    }

    async execute(){
        const tasks = await this.taskRepository.getAll();
        return tasks;
    }
}