import express from "express";

import { blog } from "../models/blog.js";
import { service_category } from "../models/serviceCategory.js";

import pkg, { Sequelize } from "sequelize";
import {
  checker,
  updateBlogChecker,
  verfiyTokenAndAuthorization,
} from "../util.js";
import { sum_Blog_type_read } from "../dbMethods.js";
const { Op } = pkg;

import multerConfig from "../multer.js";

const upload = multerConfig("blog");

const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  try {
    let { page, size } = req.query;

    if (!size) {
      size = 2;
    }
    const skip = (parseInt(page) - 1) * size;
    const limit = parseInt(size);

    const blogs = await blog.findAll();

    const numOfPages = Math.ceil(blogs.length / size);

    const allBlogs = await blog.findAll({
      include: "user",
      offset: skip,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });
    res.send({ blogs: allBlogs, totalpage: numOfPages });
  } catch (e) {
    res.status(404).send(e);
  }
});

blogRouter.get("/mostread", async (req, res) => {
  try {
    let blogs = await blog.findAll();

    const mostread = blogs.sort((a, b) => b.read - a.read);

    res.send(mostread.slice(0, 4));
  } catch (e) {
    res.status(404).send(e);
  }
});

blogRouter.post("/:user_id", upload.single("blog_image"), async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const { file, body } = req;
    const path = file.path;
    const BLOG = await blog.create({ ...body, image: path, user_id });
    res.json(BLOG);
  } catch (e) {
    res.send(e);
  }
});
blogRouter.get("/finduserblogs/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const category = req.query.category;
  let userblogs;
  try {
    if (category) {
      userblogs = await blog.findAll({
        where: {
          [Op.and]: [{ user_id: user_id }, { blog_type: category }],
        },
        include: "user",
        order: [["createdAt", "DESC"]],
      });

      res.send(userblogs);
    } else {
      userblogs = await blog.findAll({
        where: { user_id: user_id },
        include: "user",
        order: [["createdAt", "DESC"]],
      });
      res.send(userblogs);
    }
  } catch (e) {
    res.send(e);
  }
});

blogRouter.get("/findblog", async (req, res) => {
  try {
    let posts;
    const category = req.query.category;
    const New = req.query.new;
    const blogs = await blog.findAll();
    const numOfPages = Math.ceil(blogs.length / 2);
    console.log(category);
    if (category) {
      posts = await blog.findAll({
        where: { blog_type: category },
        order: [["createdAt", "DESC"]],
        include: "user",
        limit: 4,
      });
      res.send({ totalpage: numOfPages, blogs: posts });
    } else if (New) {
      posts = await blog.findAll({
        limit: 6,
        order: [["createdAt", "DESC"]],
        include: "user",
      });
      res.send({ totalpage: numOfPages, blogs: posts });
    }
  } catch (e) {
    res.send(e);
  }
});

blogRouter.delete("/delete/:blog_id", async (req, res) => {
  const blog_id = req.params.blog_id;

  await blog.destroy({ where: { blog_id: blog_id } });
  res.status(200).send("deleted");
});
//specific blog
blogRouter.get("/:blog_id", async (req, res) => {
  try {
    const blog_id = req.params.blog_id;
    let Blog = await blog.findOne({
      where: { blog_id: blog_id },
      include: "user",
    });
    const blogs = Blog.toJSON();
    blogs.read++;
    await blog.update({ read: blogs.read }, { where: { blog_id: blog_id } });
    let BlogUpdated = await blog.findOne({
      where: { blog_id: blog_id },
      include: "user",
    });

    res.send(BlogUpdated);
  } catch (e) {
    res.send(e);
  }
});
//update
blogRouter.put(
  "/update/:blog_id",

  async (req, res) => {
    const blog_id = req.params.blog_id;
    const updated = await updateBlogChecker(blog_id, req.body);
    const updatedvalue = await blog.update(
      { ...updated },
      {
        where: {
          blog_id: blog_id,
        },
      }
    );
    res.send(updatedvalue);
  }
);

blogRouter.get("/categoryreads/all", async (req, res) => {
  const allread = await blog.findAll({
    attributes: [
      "blog_type",
      [Sequelize.fn("sum", Sequelize.col("read")), "total_read"],
    ],
    group: ["blog_type"],
  });
  res.send(allread);
});

//
blogRouter.get("/bloganalaytic/:user_id", async (req, res) => {
  const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
  const currentdate = new Date(new Date().setDate(new Date().getDate() + 1));
  const blog1 = await blog.findAll({
    attributes: ["createdAt"],
    where: {
      user_id: req.params.user_id,
      createdAt: {
        [Sequelize.Op.gt]: sevenDaysAgo,
        [Sequelize.Op.lt]: currentdate,
      },
    },
  });
  res.send(blog1);
});

blogRouter.get("/mostread", async (req, res) => {
  try {
  } catch (e) {
    res.status(404).send({ message: "cant find most read blog" });
  }
});

export default blogRouter;
