import Task from '../../../domain/models/TaskModel.js';
import TaskRepository from '../../../domain/repositories/TaskRepository.js';

export default class MySQLTaskRepository extends TaskRepository{

    async createTask(task){
        const taskBody = await Task.create(task);
        return taskBody;
    }

    async getAll(){
        const taskResponse = await Task.findAll();
        return taskResponse;
    }

    async getAllByUser(id){
        const taskReponse = await Task.findAll({
            where:{userId: id}
        })
        return taskReponse;
    }

}
