import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import BlogDetail from './BlogDetail';


const Blog = () => {
const[blogs,setBlogs]=useState([])
const [changer,setchanger]=useState(false)


const location=useLocation()
console.log(location.search)
    useEffect(() => {
        const fetchdata=async()=>{
        if(location.search)
        {
        const {data}= await axios.get(`/api/blogs/findblog${location.search}`)
        setBlogs(data)
    }
        else{
          const {data}= await axios.get("/api/blogs")
          setBlogs(data)
        }
        }
        fetchdata()
    }, [])

     useEffect(() => {
        const fetchdata=async()=>{
        if(location.search)
        {
        const {data}= await axios.get(`/api/blogs/findblog${location.search}`)
        setBlogs(data)
    }
        else{
          const {data}= await axios.get("/api/blogs")
          setBlogs(data)
        }
        }
        fetchdata()
    }, [changer])



    

    
    return (
        <div>
            <h1>blog page</h1>

           
            {blogs.map(blog=>  <BlogDetail blog={blog} key={blog.blog_id} blogs={blogs} setchanger={setchanger}/>)}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8407123428246!2d38.7865793140705!3d8.986801092124637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853c14f0e2d5%3A0x32ce0404870c8088!2sEthiopian%20Skylight%20Hotel!5e0!3m2!1sen!2set!4v1638967030163!5m2!1sen!2set" 
            style={{width:"600px" ,height:"450px",border:0}}  allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default Blog
