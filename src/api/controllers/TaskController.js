export default class TaskController{
    constructor(createTask, getAllTask, getAllTaskByUser){
        this.createTask = createTask;
        this.getAllTask = getAllTask;
        this.getAllTaskByUser = getAllTaskByUser;
    }

    async createTasks(req, res){
        try{
            const task ={
                nome: req.body.nome,
                descricao: req.body.descricao,
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
}