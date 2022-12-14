import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import{Link} from 'react-router-dom'

const Home = () => {

const[blogName,setBlogName]=useState([])
const[blog_type,setBlog_type]=useState("") 
const[blog_content,setBlog_content]=useState("")
const[blog_title,setBlog_title]=useState("")


  useEffect(() => {
    const fetchdata=async()=>{

      const {data}=await axios.get("api/servicecategory",{headers:{
        "token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJmdWxsX25hbWUiOiJleW9iIHRhZGVsZSIsInBob25lIjo5MjcsInBhc3N3b3JkIjoiMTExMSIsImltYWdlIjpudWxsLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTAzVDA4OjU5OjEyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTAzVDIwOjEwOjQwLjAwMFoiLCJpYXQiOjE2MzkwMzc4NzEsImV4cCI6MTY0MTYyOTg3MX0.KqV_6kMGkTewrclK8fB-dDzFqxN8B7i9v9v6TBuA-qc"
      }}) 
  
      setBlogName(data)
       

    }
fetchdata()

  }, [])
 
  
 const handleSubmit=async(e)=>{
   e.preventDefault()
   const blogvalues={blog_type,blog_content,blog_title}
  await axios.post("api/blogs/1",blogvalues,{headers:{
        "token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJmdWxsX25hbWUiOiJleW9iIHRhZGVsZSIsInBob25lIjo5MjcsInBhc3N3b3JkIjoiMTExMSIsImltYWdlIjpudWxsLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTAzVDA4OjU5OjEyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTAzVDIwOjEwOjQwLjAwMFoiLCJpYXQiOjE2MzkwMzc4NzEsImV4cCI6MTY0MTYyOTg3MX0.KqV_6kMGkTewrclK8fB-dDzFqxN8B7i9v9v6TBuA-qc"
      }}) 


 }
    return (
        <div>
          <Link to={{
         pathname:"/blogs",
         search:""
        }}>all</Link>
         
       {
         blogName.map(blogcat=><div key={blogcat.id}>

             <Link to={{
                pathname:"/blogs",
                search:`category=${blogcat.name}`
                      }}>
               {blogcat.name}
            </Link>

         </div>)
       }
<h3>add new blog</h3>
<form onSubmit={handleSubmit}>
       <div>
        <span>title:</span>
        <input type={blog_title} placeholder="put your title in here"
           onChange={e=>setBlog_title(e.target.value)}/>
      </div>
        
       <div>
            <span>blog content :</span> 
            <input type={blog_content} placeholder="write some blog content"
             onChange={e=>setBlog_content(e.target.value)}/>
      </div>
      
      <div>

        <span>select blog type:</span>
        <select onChange={e=>setBlog_type(e.target.value)}>
         <option value="" disabled selected>select blog type</option>
         {
           blogName.map(blogcat=><option value={blogcat.name}>{blogcat.name}</option>)
         }
        </select>
      </div>
        
       
        <button type="submit">submit</button>
</form>

<h3>add new service</h3>

        </div>
    )
}

export default Home
