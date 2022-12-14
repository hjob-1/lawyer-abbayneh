import sequelize from "../config.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

const gallery = sequelize.define(
  "gallery",
  {
    gallery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gallery_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    download: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export { gallery };
