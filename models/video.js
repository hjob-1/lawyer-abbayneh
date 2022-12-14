import sequelize from "../config.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

const video = sequelize.define(
  "video",
  {
    video_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    video_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    watched: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export { video };
