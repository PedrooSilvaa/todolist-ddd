export default class TaskController{
    constructor(createTask, getAllTask){
        this.createTask = createTask;
        this.getAllTask = getAllTask;
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
}