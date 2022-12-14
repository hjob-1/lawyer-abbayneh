import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const LatestBlogDetail = ({ singlePost, index }) => {
  const { blog_content, blog_id, blog_title, image } = singlePost;
  return (
    <div key={blog_id} className="post">
      <div>
        {image && (
          <img src={"https://www.server.abbaylaw.com/" + image} alt={"img"} />
        )}
      </div>
      <p>
        <Link to={`/blog/${blog_id}`}>{blog_title.slice(0, 100)}</Link>
      </p>
    </div>
  );
};

export default LatestBlogDetail;
