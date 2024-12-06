import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";

// Definição do modelo Task
const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'users',
      key: 'userId'  
    }
  }
}, {
  tableName: 'tasks',
  timestamps: false,
});

Task.associate = (models) => {
  Task.belongsTo(models.User, { foreignKey: 'userId' });
};

export default Task;
