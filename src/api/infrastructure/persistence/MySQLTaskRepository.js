import Task from '../../../domain/models/TaskModel.js';
import TaskRepository from '../../../domain/repositories/TaskRepository.js';

export default class MySQLTaskRepository extends TaskRepository{

    async createTask(task){
        const task = await Task.create(task);
        return task;
    }

}
