class UserController {
  constructor(getAllUsers, getUserById) {
    this.getAllUsers = getAllUsers;
    this.getUserById = getUserById;  // Renomeando a variável para evitar conflito
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
      const user = await this.getUserById.execute(id); // Usando o nome correto da variável
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
