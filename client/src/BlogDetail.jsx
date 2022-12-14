import axios from 'axios'
import React, { useState } from 'react'

const BlogDetail = ({blog,blogs,setchanger}) => {
const [edited,setedited]=useState("")
const [inputs,setInputs]=useState({})



    const handleAction=async(type,blog_id,e)=>{
       
          setedited(blog_id)
        if(type==="edit"){
        const blog= blogs.find(blog=>blog.blog_id===blog_id)
        setInputs( {blog_type:blog.blog_type,
                    blog_content:blog.blog_content})
      
        }
    }

    const handleSubmit=async(blog_id)=>{

       await axios.put(`/api/blogs/update/${blog_id}`,inputs,{headers:{
        "token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJmdWxsX25hbWUiOiJleW9iIHRhZGVsZSIsInBob25lIjo5MjcsInBhc3N3b3JkIjoiMTExMSIsImltYWdlIjpudWxsLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTAzVDA4OjU5OjEyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTAzVDIwOjEwOjQwLjAwMFoiLCJpYXQiOjE2MzkwMzc4NzEsImV4cCI6MTY0MTYyOTg3MX0.KqV_6kMGkTewrclK8fB-dDzFqxN8B7i9v9v6TBuA-qc"
      }})
      setchanger((props)=>!props)
      setedited("")
       
    }


    return (
        <div>
            <h3>{blog.blog_title}</h3>
                     <p ><input type="text"  name="blog_type"
                     style={{border:edited===blog.blog_id?"":"none"}}
                      value={ edited===blog.blog_id?inputs.blog_type:blog.blog_type}
                      disabled={edited===blog.blog_id?false:true}
                      onChange={(e)=>setInputs({...inputs,[e.target.name]:e.target.value})}/> </p>
                     <p><textarea className="textarea1"type="text"  name="blog_content" 
                      style={{border:edited===blog.blog_id?"":"none"
                             }}
                     value={edited===blog.blog_id?inputs.blog_content:blog.blog_content} 
                     disabled={edited===blog.blog_id?false:true}
                     onChange={(e)=>setInputs({...inputs,[e.target.name]:e.target.value})}
                     /> </p>
                    <p>
                      <span>written by:</span> <span>{blog.user.full_name}</span>
                    </p> 
                    <span onClick={(e)=>handleAction("edit",blog.blog_id,e)}>edit</span>{" "} 
                    <span onClick={(e)=>handleAction("delete",blog.blog_id,e)}>delete</span>
                    { edited===blog.blog_id&&<button onClick={()=>handleSubmit(blog.blog_id)}>update</button>}
        </div>
    )
}

export default BlogDetail
