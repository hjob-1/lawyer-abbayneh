import sequelize from "../config.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

const Message = sequelize.define(
  "message",
  {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneOrEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
    },
    describition: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

export default Message;
