import React, { useEffect, useState } from "react";
import "./blogs.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import NavBar from "../../components/NavBar/NavBar";
import { blogs } from "../../services/apiEndUrls";
import { fetchApi } from "../../services/fetchApi";
import Pagination from "../../components/Pagination";
import moment from "moment";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [pageNum, setPageNum] = useState();
  const [page, setPages] = useState(1);

  const handlebutton = (type) => {
    if (type === "next") {
      setPages(page + 1);
    } else setPages(page - 1);

    window.scroll(0, 0);
  };

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      const data = await fetchApi(blogs + `?page=${page}`, "", " ", "GET", " ");
      setPageNum(data.totalpage);
      setBlogData(data.blogs);
      setisLoading(false);
    };
    initializer();
  }, [page]);

  return (
    <>
      <NavBar />
      <div className="blog">
        <h2 className="blog-header">All Bloges</h2>

        <Table hover>
          <thead className="text-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Title</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((blog, index) => {
              return (
                <tr key={index}>
                  <td>{blog.user.full_name}</td>
                  <td>{blog.blog_type}</td>
                  <td>{blog.blog_title}</td>
                  <td>{moment(blog.createdAt).calendar()}</td>
                  <td style={{ paddingLeft: "20px" }}>
                    <Link to={`/blogs/${blog.blog_id}`}>
                      <BsFillEyeFill
                        style={{ color: "white", fontSize: "17px" }}
                        className="text-info"
                      />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination page={page} handlebutton={handlebutton} pageNum={pageNum} />
        <div className="Add-icon">
          <Link to={"/addblog"} className="plus-icon">
            <MdAdd className="text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
