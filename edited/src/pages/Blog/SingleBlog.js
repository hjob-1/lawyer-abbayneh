import React from "react";

import { Link } from "react-router-dom";

import Date from "../../components/Date";

const SingleBlog = ({ blog }) => {
  const {
    blog_type,
    blog_content,
    image,
    blog_title,
    user,
    createdAt,
    blog_id,
  } = blog;

  return (
    <div className="bMain">
      <h2>{blog_title}</h2>
      {image && (
        <img
          className="bMain_img"
          src={"https://www.server.abbaylaw.com/" + image}
          alt=""
        />
      )}

      <span>
        <span
          className="bMain_smallfont"
          style={{ color: "rgb(179, 172, 172)" }}
        >
          Posted In:
        </span>
        <span className="smallfont_white">
          {blog_type} {blog_type.toUpperCase() === "OTHERS" ? " " : "Law"}
        </span>

        <span
          className="bMain_smallfont"
          style={{ color: "rgb(179, 172, 172)" }}
        >
          On:
        </span>
        <Date createdAt={createdAt} />
      </span>

      <p style={{ marginTop: "20px" }}>
        {blog_content.slice(0, 150)}...
        <Link to={`/blog/${blog_id}`}>
          <button>Read more</button>
        </Link>
      </p>

      <div className="bFooter border">
        <div className="bFooter">
          <span style={{ color: "rgb(179, 172, 172)" }}>Posted By:</span>
          {user.image && (
            <img src={"https://www.server.abbaylaw.com/" + user.image} alt="" />
          )}

          <p className="name" style={{ color: "black", fontSize: "13px" }}>
            {user.full_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
