class TaskController{
    constructor(createTask){
        this.createTask = createTask;
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
}

export default TaskController;