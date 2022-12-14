import React, { useEffect, useState } from "react";
import "../../styles/Blog/blog.css";

import SingleBlog from "./SingleBlog";

import { useLocation } from "react-router-dom";
import axios from "axios";

import Hero from "../../components/Hero";
import { FcNext, FcPrevious } from "react-icons/fc";

const Blog = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [pageNum, setPageNum] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [page, setPages] = useState(1);
  const [title, setTitle] = useState("Blogs");

  const pagenumberGenerator = (pageNum, page) => {
    let pageArray = [];
    for (let x = 0; x < pageNum; x++) {
      pageArray.push(x + 1);
    }
    return pageArray.map((num) => (
      <span className={num === page ? "active" : undefined}>{num}</span>
    ));
  };

  const handlebutton = (type) => {
    if (type === "next") {
      setPages(page + 1);
    } else setPages(page - 1);

    window.scroll(0, 0);
  };

  useEffect(() => {
    const fetchdata = async () => {
      if (location.search) {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.server.abbaylaw.com/api/blogs/findblog${location.search}`
        );
        setBlogs(data.blogs);
        setPageNum(data.totalpage);
        setTitle(location.search.split("=")[1] + " Law");
        location.search = null;

        setLoading(false);
      } else {
        setLoading(true);
        const { data } = await axios.get(
          "https://www.server.abbaylaw.com/api/blogs?page=" + page
        );

        setTitle("Blogs");
        setBlogs(data.blogs);
        setPageNum(data.totalpage);
        setLoading(false);
      }
    };
    fetchdata();
  }, [location, page]);

  return (
    <div className="BLOG">
      <div>
        <Hero title={title} />
        {loading ? (
          [
            { id: "1", num: 1 },
            { id: "2", num: 2 },
          ].map((item) => <div key={item.id}>{children[0]}</div>)
        ) : (
          <>
            {blogs.map((blog) => {
              return (
                <div key={blog.blog_id} className="SingleBlog">
                  <SingleBlog blog={blog} />
                </div>
              );
            })}
            <div className="btns_wrapper">
              <button
                onClick={() => handlebutton("prev")}
                disabled={page !== 1 ? false : true}
              >
                <FcPrevious disabled={page !== 1 ? false : true} />
              </button>
              <button
                onClick={() => handlebutton("next")}
                disabled={page < pageNum ? false : true}
              >
                <FcNext />
              </button>
            </div>
            <div className="page_counter">
              {pagenumberGenerator(pageNum, page)}
            </div>
          </>
        )}
      </div>
      {children[1]}
      {/* Latest Blog componenet */}
    </div>
  );
};

export default Blog;
