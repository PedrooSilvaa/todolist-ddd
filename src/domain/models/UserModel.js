import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js'

const UserModel = sequelize.define("Users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export default UserModel;