import express from "express";
import { blog } from "../models/blog.js";

import { user } from "../models/user.js";
import multerConfig from "../multer.js";
import {
  checker,
  generateToken,
  verfiyTokenAndAdmin,
  verfiyTokenAndAuthorization,
} from "../util.js";

const userRouter = express.Router();
const upload = multerConfig("blogerProfile");

//register
userRouter.post("/register", async (req, res) => {
  try {
    await user.create(req.body);

    res.send({ message: "created" });
  } catch (e) {
    res.send({ message: "try again" });
  }
});

//sign in
userRouter.post("/signin", async (req, res) => {
  try {
    const finduser = await user.findOne({
      where: {
        phone: req.body.phone,
      },
    });
    if (finduser) {
      if (finduser.password === req.body.password) {
        const { password, ...rest } = finduser.toJSON();

        res.send({
          ...rest,
          token: generateToken(finduser.toJSON()),
        });
      } else res.send("incorrect password");
    } else res.send("not found");
  } catch (e) {
    res.send("error");
  }
});
// update with out image
userRouter.put(
  "/update/:user_id",

  upload.single("bloger_image"),
  async (req, res) => {
    try {
      const { file, body } = req;
      //const updateFeilds = await checker(req.params.user_id, req.body);
      const path = file.path;
      console.log(file, body);

      await user.update(
        { ...body, image: path },
        {
          where: {
            user_id: req.params.user_id,
          },
        }
      );

      const updatedUser = await user.findOne({
        where: { user_id: req.params.user_id },
      });
      res.send(updatedUser);
    } catch (e) {
      res.send(e);
    }
  }
);
userRouter.put("/update/withoutpic/:user_id", async (req, res) => {
  try {
    //const updateFeilds = await checker(req.params.user_id, req.body);

    await user.update(req.body, {
      where: {
        user_id: req.params.user_id,
      },
    });

    const updatedUser = await user.findOne({
      where: { user_id: req.params.user_id },
    });
    res.send(updatedUser);
  } catch (e) {
    res.send(e);
  }
});

//delete

userRouter.delete("/delete/:user_id", verfiyTokenAndAdmin, async (req, res) => {
  try {
    await user.destroy({
      where: {
        user_id: req.params.user_id,
      },
    });
    res.send("user deleted");
  } catch (e) {
    res.send({ message: "there is no user found" });
  }
});

userRouter.get("/", verfiyTokenAndAdmin, async (req, res) => {
  try {
    const users = await user.findAll();
    res.send(users);
  } catch (e) {
    res.send({ message: "cant fetch all user try again" });
  }
});
userRouter.get("/admin", async (req, res) => {
  try {
    const admin = await user.findOne({ where: { isAdmin: true } });
    res.send(admin);
  } catch (e) {
    res.send({ message: "cant fetch all user try again" });
  }
});
userRouter.get("/:user_id", async (req, res) => {
  try {
    const bloger = await user.findOne({
      where: { user_id: req.params.user_id },
    });
    res.send(bloger);
  } catch (e) {
    res.send({ message: "cant fetch user  data ,try again" });
  }
});
userRouter.get("/number/length", verfiyTokenAndAdmin, async (req, res) => {
  try {
    let bloger = await user.findAll();

    res.send(bloger);
  } catch (e) {
    res.send({ message: "cant fetch user  data ,try again" });
  }
});

export default userRouter;
