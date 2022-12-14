import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import blogRouter from "./routers/blogRouter.js";
import sequelize from "./config.js";
import serviceCategoryRouter from "./routers/serviceCategoryRouter.js";
import galleryRouter from "./routers/galleryRouter.js";
import videoRouter from "./routers/videoRouter.js";
import messageRouter from "./routers/messageRouter.js";

let app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
//app.use("/uploads/blogerProfile", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("it works");
});

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/servicecategory", serviceCategoryRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/videos", videoRouter);
app.use("/api/messages", messageRouter);

// //build and save is frasturating so there is another method called create
//   const Blog=blog.build({blog_type:"bussines",blog_content:"eyob tadele is great",image:"1.png"})
//   Blog.save()

// //blog.create({blog_type:"bussines",blog_content:"eyob tadele is great",image:"1.png"})

sequelize
  .sync({ alter: true })
  .then(() =>
    app.listen(4000, () => console.log("app is listening on port 4000"))
  )
  .catch((e) => console.log(e));
