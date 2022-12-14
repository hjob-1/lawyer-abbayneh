import sequelize from "../config.js";
import pkg from 'sequelize'
const  {DataTypes} =pkg


const service_category= sequelize.define("service_category",
{
 name:{
     type:DataTypes.STRING,
     allowNull:true,
    
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false, 
    }

 

},{
     freezeTableName:true,
      timestamps:true,
})

export {service_category}