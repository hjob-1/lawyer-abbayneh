import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { postData } from "../../blogData";
import { posts } from "../../posts";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Date from "../../components/Date";
import SkeletonBlog from "../../components/SkeletonBlog";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [mostRead, setMostRead] = useState([]);
  const [fetcher, fetching] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      fetching(true);
      const { data } = await axios.get(
        `https://www.server.abbaylaw.com/api/blogs/${parseInt(id)}`
      );
      const mostread = await axios.get(
        "https://www.server.abbaylaw.com/api/blogs/mostread"
      );
      setMostRead(mostread.data);
      setBlog(data);
      fetching(false);
    };
    fetchdata();
  }, [id]);

  return (
    <div>
      <div className="bMain ">
        {fetcher ? (
          <SkeletonBlog />
        ) : (
          <>
            {" "}
            <article className="blogsection">
              <h1>{blog.blog_title}</h1>
              {blog.image && (
                <img
                  src={"https://www.server.abbaylaw.com/" + blog.image}
                  alt="blog_image"
                />
              )}

              <p>
                <span
                  className="bMain_smallfont"
                  style={{ color: "rgb(179, 172, 172)" }}
                >
                  Posted In:
                </span>
                <span className="smallfont_white">
                  {blog.blog_type}{" "}
                  {blog.blog_type.toUpperCase() === "OTHERS" ? " " : "Law"}
                </span>
                <span style={{ color: "rgb(179, 172, 172)" }}>On</span>
                <Date createdAt={blog.createdAt} />
              </p>
              <p style={{ marginTop: "20px", lineHeight: "28px" }}>
                {blog.blog_content}
              </p>
              <p style={{ textAlign: "right", fontWeight: "400" }}>
                <span
                  style={{
                    color: "#2360dc",
                    fontSize: "15px",
                    textAlign: "right",
                    fontWeight: "400",
                  }}
                >
                  {blog.read}
                </span>
                Reads
              </p>
              <div className="bloggerDetails">
                <div className="img_wrapper">
                  {blog.user.image && (
                    <img
                      src={"https://www.server.abbaylaw.com/" + blog.user.image}
                      alt=""
                    />
                  )}
                </div>
                <div className="writter-info">
                  <p style={{ marginBottom: "0px" }}>
                    <span> Posted By: </span>
                    <span style={{ color: "black", fontWeight: "400" }}>
                      {blog.user.full_name}
                    </span>
                  </p>
                  <p style={{ marginTop: "0px" }}>
                    <span>Expertise:</span>
                    <span style={{ color: "black", fontWeight: "400" }}>
                      {blog.user.about_job}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </>
        )}
      </div>

      <div className="mostReadBlog">
        <div className="__latest-posts">
          <h3>
            <span className="special">Most Read</span> Blogs
          </h3>
          <div>
            {mostRead.map((singlePost) => {
              const { blog_id, blog_content, image } = singlePost;

              return (
                <div key={blog_id} className="post">
                  <div>
                    {image && (
                      <img
                        src={"https://www.server.abbaylaw.com/" + image}
                        alt="blog"
                      />
                    )}
                  </div>
                  <p>
                    {blog_content.slice(0, 100)}...
                    <span className="readmore_container">
                      <Link to={`/blog/${blog_id}`}>
                        <span className="readMore">Read more</span>
                      </Link>
                      <BsFillArrowRightSquareFill className="btn" />
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
