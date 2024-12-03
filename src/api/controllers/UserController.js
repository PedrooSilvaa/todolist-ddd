class UserController {
    constructor(getAllUsers) {
      this.getAllUsers = getAllUsers;
    }
  
    async getAll(req, res) {
      try {
        const users = await this.getAllUsers.execute();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  export default UserController;
  