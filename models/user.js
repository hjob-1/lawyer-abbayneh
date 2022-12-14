import sequelize from "../config.js";
import pkg from 'sequelize'
const  {DataTypes} =pkg
import {blog} from './blog.js'

import {service_category } from "./serviceCategory.js";

const user=sequelize.define('user',{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    full_name:{
      type:DataTypes.STRING,
      allowNull:false,
      },
     email:{
      type:DataTypes.STRING,
      unique:false,
       },
    address:{
      type:DataTypes.STRING,
      allowNull:true,
      },
     about_job:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    phone:{
        type:DataTypes.INTEGER,
        allowNull:true,
       
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
        
    }
  },{
      freezeTableName:true,
      timestamps:true,
    })

    //alter:true changes our table only the neccesary part
    //force:true drop our table and create again

     user.hasMany(blog,{  foreignKey:"user_id",
                          onDelete:"cascade",
                          onUpdate:"cascade"})
     blog.belongsTo(user,{foreignKey:"user_id"})

      user.hasMany(service_category,{  foreignKey:"user_id",
                          onDelete:"cascade",
                          onUpdate:"cascade"})
     service_category.belongsTo(user,{foreignKey:"user_id"})
     
     
    
export {user};