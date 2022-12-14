import sequelize from "../config.js";
import pkg from 'sequelize'
const  {DataTypes} =pkg


const blog=sequelize.define("blog",
{
blog_id:{
     type:DataTypes.INTEGER,
     primaryKey:true,
     autoIncrement:true,
},
blog_title:{
     type:DataTypes.STRING,
     allowNull:false,
},
blog_type:{
     type:DataTypes.STRING,
     allowNull:false,
},
blog_content:{
    type:DataTypes.TEXT,
    allowNull:false,
},
image:{
    type:DataTypes.STRING,
     allowNull:true,
},
read:{
     type:DataTypes.INTEGER,
     defaultValue:0
}
},{
     freezeTableName:true,
      timestamps:true,
})


 export {blog};