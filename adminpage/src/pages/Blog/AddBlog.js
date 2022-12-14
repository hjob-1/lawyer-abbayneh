import React, { useEffect, useState } from "react";
import axios from "axios";
const AddBlog = () => {
  const [inputs, setInputs] = useState();
  const [blogName, setBlogName] = useState([]);
  const [blog_type, setBlog_type] = useState("");
  const [file, setFile] = useState();

  const handleChange = (evt) => {
    console.log(inputs);
    setInputs({ ...inputs, [evt.target.name]: evt.target.value });
  };
  const fileHandler = (evt) => {
    let file = evt.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        "https://www.server.abbaylaw.com/api/servicecategory/"
      );

      setBlogName(data);
    };
    fetchdata();
  }, []);

  const handleFORM = () => {
    let data = new FormData();

    data.append("blog_type", blog_type);
    data.append("blog_content", inputs.blog_content);
    data.append("blog_title", inputs.blog_title);
    data.append("blog_image", file);
    return data;
  };
  const handleSubmit = async () => {
    try {
      const data = handleFORM();
      await axios.post("https://www.server.abbaylaw.com/api/blogs/6", data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="add-blog">
      <div>
        <span>Title</span>
        <input
          className="input_feild"
          type="text"
          name="blog_title"
          onChange={(evt) => handleChange(evt)}
        />
      </div>

      <div>
        <span>category </span>
        <select onChange={(e) => setBlog_type(e.target.value)}>
          <option value="" disabled selected>
            select blog type
          </option>
          {blogName.map((blogcat) => (
            <option key={blogcat.id} value={blogcat.name}>
              {blogcat.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Blog</span>
        <textarea
          name="blog_content"
          id=""
          cols="30"
          rows="10"
          onChange={(evt) => handleChange(evt)}
        ></textarea>
      </div>
      <div className="image-flex" style={{ border: "none" }}>
        <span>Image</span>
        <input
          style={{ border: "none" }}
          type="file"
          onChange={(evt) => fileHandler(evt)}
          id=""
          placeholder="image"
        />
      </div>
      <button className="btn btn-info" onClick={handleSubmit}>
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
