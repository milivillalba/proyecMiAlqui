import { sequelize } from "../conf/db.js";
import { DataTypes } from 'sequelize';

export const UserModel = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    tableName: "users"
  }
);
