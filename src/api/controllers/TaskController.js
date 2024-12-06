export default class TaskController{
    constructor(createTask, getAllTask, getAllTaskByUser, deleteById, updateById, getTaskById){
        this.createTask = createTask;
        this.getAllTask = getAllTask;
        this.getAllTaskByUser = getAllTaskByUser;
        this.deleteById = deleteById;
        this.updateById = updateById;
        this.getTaskById = getTaskById;
    }

    async createTasks(req, res){
        try{
            const task ={
                nome: req.body.nome,
                descricao: req.body.descricao,
                status: 'Backlog',
                userId: req.params.idUser
            }
            const tasks = await this.createTask.execute(task);
            res.status(201).json(tasks)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async getAll(req, res){
        try{
            const tasks = await this.getAllTask.execute();
            res.status(200).json(tasks);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async getAllByUser(req, res){
        try{
            const idUser = req.params.idUser;
            const tasks = await this.getAllTaskByUser.execute(idUser);
            res.status(200).json(tasks);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async delete(req, res){
        try{
            const id = req.params.id;
            await this.deleteById.execute(id);
            res.status(200).json('Task deleted successfully')
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async update(req, res){
        try{
            const id = req.params.id;
            const task = {
                nome: req.body.nome,
                descricao: req.body.descricao,
                status: req.body.status
            }
            const tasks = await this.updateById.execute(id, task);
            res.status(200).json(tasks)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async getById(req, res){
        try{
            const id = req.params.id;
            const task = await this.getTaskById.execute(id);
            res.status(200).json(task)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
}