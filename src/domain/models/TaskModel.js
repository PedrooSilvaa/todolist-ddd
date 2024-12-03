import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js'

const TaskModel = sequelize.define("Tasks",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: UserModel,   
          key: 'id',           
        },
        onDelete: 'CASCADE',
      },
    }, {
      tableName: 'tasks', 
});

UserModel.hasMany(TaskModel, {
    foreignKey: 'userId', 
    onDelete: 'CASCADE',   
  });
  
  TaskModel.belongsTo(UserModel, {
    foreignKey: 'userId',
  });

export default TaskModel;