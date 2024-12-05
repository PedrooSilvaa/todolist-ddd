class UserController {
  constructor(getAllUsers, getUserById, createUser, deleteById, updateById) {
    this.getAllUsers = getAllUsers;
    this.getUserById = getUserById;
    this.createUser = createUser;
    this.deleteById = deleteById;
    this.updateById = updateById;
  }

  async getAll(req, res) {
    try {
      const users = await this.getAllUsers.execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      let id = req.params.id;
      const user = await this.getUserById.execute(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      let userBody = {
        nome: req.body.nome,
        email: req.body.email
      }
      const user = await this.createUser.execute(userBody);
      if (!user) {
        return res.status(400).json({ error: 'Invalid data' });
      }
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUserById(req, res) {
    try {
      let id = req.params.id;
      const response = await this.deleteById.execute(id);
      if (!response) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUserById(req, res){
  try{
    let id = req.params.id;
    let user = {
      nome: req.body.nome,
      email: req.body.email
    }
    const userResponse = await this.updateById.execute(id, user);
    if(!userResponse){
      return res.status(404).json({error: "User not found"});
    }
    res.status(200).json(userResponse);
  } catch(error){
    res.status(500).json({error: error.message});
  }
  }
}

export default UserController;
