import jwt from "jsonwebtoken"
import { blog } from "./models/blog.js"
import { user } from "./models/user.js"


export const  generateToken=(user)=>{

    return jwt.sign(user,process.env.JWT_SECRETE,{
    expiresIn:'30d'
      })

}

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
   if(authHeader){
       let token=authHeader.split(" ")
       token=token[1]
           jwt.verify(token,process.env.JWT_SECRETE,(err,user)=>{
                 if(err){
                 res.status(404).json(" token is not valid")
                }
                else{
           req.user=user
           next()
        }
             });
              
   }
   else{
       res.status(401).json(" you are not authenticated")
   }
}


const verfiyTokenAndAuthorization=(req,res,next)=>
{
    verifyToken(req,res,()=>{
         if(req.user.user_id===req.params.user_id||req.user.isAdmin)
         next()
         else
         res.status(400).json('you are not allowed to do that')
        })
    }


    const verfiyTokenAndAdmin=(req,res,next)=>
     {
    verifyToken(req,res,()=>{
         if(req.user.isAdmin)
         next()
         else
         res.status(400).json('YOU MUST BE AN ADMIN TO DO THAT ')
        })
     }


     const checker=async(user_id,userRequested)=>{

      let find=await user.findOne({where:{user_id:user_id}})

       find.toJSON()
      const specificvalues={
 user_id:user_id,
 password:userRequested.password?userRequested.password:find.password,
 image:userRequested.image?userRequested.image:find.image,
 phone:userRequested.phone?userRequested.phone:find.phone,
 full_name:userRequested.full_name?userRequested.full_name:find.full_name,
 isAdmin:find.isAdmin

      }
 return specificvalues

     }
     
     const updateBlogChecker=async(blog_id,blogRequested)=>{

      let find=await blog.findOne({where:{blog_id:blog_id}})

       find.toJSON()
      const specificvalues={
 blog_id:blog_id,
 blog_type:blogRequested.blog_type?blogRequested.blog_type:find.blog_type,
 blog_content:blogRequested.blog_content?blogRequested.blog_content:find.blog_content,
 image:blogRequested.image?blogRequested.image:find.image,
 user_id:find.user_id
      }
 return specificvalues

     }
     



export {verifyToken,verfiyTokenAndAuthorization,verfiyTokenAndAdmin,checker, updateBlogChecker}
export default generateToken