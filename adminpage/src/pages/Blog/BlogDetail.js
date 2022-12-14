import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../../utilities/blogData";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdOutlineUpdate } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { fetchApi } from "../../services/fetchApi";
import { blogs } from "../../services/apiEndUrls";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import TextareaAutosize from "react-textarea-autosize";
import Confirmation from "../../components/Confirmation";

const BlogDetail = () => {
  const [blogData, setBlogData] = useState();
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();
  const [isdelete, setisDelete] = useState(false);
  const [isdeleteBlogActivate, setisdeleteBlogActivate] = useState(false);
  const navigate = useNavigate();

  const [editedFields, setEditedFields] = useState({
    blog_title: "",
    active: true,
    blog_content: "",
  });

  const handleEdit = () => {
    setEditedFields({
      ...editedFields,
      active: false,
    });
  };
  const handleTitle = (e) => {
    console.log("title pressed");
    setEditedFields({ ...editedFields, blog_title: e.target.value });
  };

  const handleTextChange = (e) => {
    setEditedFields({ ...editedFields, blog_content: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const { blog_title, blog_content } = editedFields;
      const data = await fetchApi(
        blogs + "/update/" + blogData.blog_id,
        "",
        " ",
        "PUT",
        { blog_title, blog_content }
      );
      console.log(data, "if 1 is the output its successfully updated");

      setEditedFields({ ...editedFields, active: true });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const initializer = async () => {
      setisLoading(true);
      const data = await fetchApi(blogs + "/" + id, "", " ", "GET", " ");
      setBlogData(data);
      setEditedFields({
        ...editedFields,
        blog_title: data.blog_title,
        blog_content: data.blog_content,
      });
      setisLoading(false);
    };
    initializer();
  }, []);

  useEffect(() => {
    const initializer = async () => {
      if (isdeleteBlogActivate) {
        await fetchApi(
          blogs + "/delete/" + blogData.blog_id,
          "",
          " ",
          "DELETE",
          " "
        );
        navigate("/blog");
      }
    };
    initializer();
  }, [isdeleteBlogActivate]);

  const { active, blog_content, blog_title } = editedFields;

  return (
    <>
      <NavBar />

      <div className="blogdetails">
        {isLoading ? (
          "loading"
        ) : (
          <>
            <div className="high">
              <TextareaAutosize
                value={blog_title}
                style={editIsActive(active)}
                disabled={active}
                className="title"
                onChange={(evt) => handleTitle(evt)}
              />
            </div>
            <img src={`http://localhost:4000/${blogData.image}`} />
            <div className="blogdetailsheader">
              <span>
                <span className="special">Category:-</span> {blogData.blog_type}
              </span>
              <time>{moment(blogData.createdAt).calendar()}</time>
            </div>
            <TextareaAutosize
              value={blog_content}
              style={editIsActive(active)}
              disabled={active}
              onChange={(evt) => handleTextChange(evt)}
            />

            <div className="blogDetailsfooter">
              <div>
                <img
                  src={`http://localhost:4000/${blogData.user.image}`}
                  className="details-img"
                />
                <span className="text-info" style={{ marginLeft: "5px" }}>
                  {blogData.user.full_name}
                </span>
              </div>
              <div>
                <span className="text-info">Reads:-{blogData.read}</span>
                {active ? (
                  <BiEdit
                    style={{ color: "green", fontSize: "17px" }}
                    onClick={handleEdit}
                  />
                ) : (
                  <MdOutlineUpdate
                    onClick={handleUpdate}
                    style={{ color: "green", fontSize: "20px" }}
                  />
                )}
                <BsTrash
                  onClick={() => setisDelete(!isdelete)}
                  style={{ fontSize: "17px", color: "red" }}
                />
              </div>
            </div>
          </>
        )}
        {isdelete && (
          <Confirmation
            handleDeleteChoice={setisDelete}
            setisdeleteBlogActivate={setisdeleteBlogActivate}
          />
        )}
      </div>
    </>
  );
};

const editIsActive = (active) => {
  const editStyle = {
    border: "1px solid #39c0ed",
    width: "100%",
  };
  const defaultStyle = {
    border: "none",
    width: "100%",
  };

  return active ? defaultStyle : editStyle;
};

export default BlogDetail;
