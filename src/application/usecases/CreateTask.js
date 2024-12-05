export default class CreateTask {
    constructor(taskRepository) {
      this.taskRepository = taskRepository;
    }
  
    async execute(task) {
      const tasks = await this.taskRepository.createTask(task);
      return tasks;
    }
  }
  

  