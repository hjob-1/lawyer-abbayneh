import express from "express";
import { service_category } from "../models/serviceCategory.js";
import { verfiyTokenAndAdmin } from "../util.js";

const serviceCategoryRouter = express.Router();

serviceCategoryRouter.post(
  "/create/:user_id",
  verfiyTokenAndAdmin,
  async (req, res) => {
    const user_id = req.params.user_id;
    const newBlogCategory = await service_category.create({
      ...req.body,
      user_id,
    });
    res.send(newBlogCategory);
  }
);

serviceCategoryRouter.get("/", async (req, res) => {
  try {
    const allBlogCategory = await service_category.findAll();
    res.send(allBlogCategory);
  } catch (e) {
    res.send({ message: "cant find any" });
  }
});

serviceCategoryRouter.put(
  "/update/:blogCat_id",
  verfiyTokenAndAdmin,
  async (req, res) => {
    const blogCat_id = req.params.blogCat_id;

    const updatedBlogCategory = await service_category.update(
      { ...req.body },
      { where: { id: blogCat_id } }
    );
    res.send(updatedBlogCategory);
  }
);
serviceCategoryRouter.delete(
  "/delete/:blogCat_id",
  verfiyTokenAndAdmin,
  async (req, res) => {
    const blogCat_id = req.params.blogCat_id;

    await service_category.destroy({ where: { id: blogCat_id } });
    res.send("blog catagory deleted");
  }
);

export default serviceCategoryRouter;
