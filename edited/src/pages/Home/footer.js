import "../../styles/Home/footer.css";
import { postData } from "../../blogData";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [blogName, setBlogName] = useState([]);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const { data } = await axios.get(
          "https://www.server.abbaylaw.com/api/servicecategory",
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJmdWxsX25hbWUiOiJleW9iIHRhZGVsZSIsInBob25lIjo5MjcsInBhc3N3b3JkIjoiMTExMSIsImltYWdlIjpudWxsLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTAzVDA4OjU5OjEyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTAzVDIwOjEwOjQwLjAwMFoiLCJpYXQiOjE2MzkwMzc4NzEsImV4cCI6MTY0MTYyOTg3MX0.KqV_6kMGkTewrclK8fB-dDzFqxN8B7i9v9v6TBuA-qc",
            },
          }
        );
        console.log(data);

        setBlogName(data);
      } catch (e) {
        return null;
      }
    };
    fetchAdmin();
  }, []);

  return (
    <>
      <footer>
        <div className="blog">
          <h3>BLOG CATAGORIES</h3>
          <div className="buttons blog_link">
            <span>
              <Link
                to={{
                  pathname: "/blog",
                  search: "",
                }}
              >
                all
              </Link>
            </span>

            {blogName.map((blogcat) => (
              <span key={blogcat.id}>
                <Link
                  to={{
                    pathname: "/blog",
                    search: `category=${blogcat.name}`,
                  }}
                >
                  {blogcat.name} Law
                </Link>
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
