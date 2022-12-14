import express from "express";
import { gallery } from "../models/gallery.js";
import multerConfig from "../multer.js";

const galleryRouter = express.Router();
const upload = multerConfig("gallery");

galleryRouter.get("/", async (req, res) => {
  try {
    let { page, size } = req.query;
    if (!size) {
      size = 2;
    }
    const skip = (parseInt(page) - 1) * size;
    const total = await gallery.findAll();
    const totalpage = Math.ceil(total.length / parseInt(size));

    const images = await gallery.findAll({
      limit: parseInt(size),
      offset: skip,
      order: [["createdAt", "DESC"]],
    });
    res.send({ pages: totalpage, gallery: images });
  } catch (e) {
    res.status(404).send(e.message);
  }
});

galleryRouter.delete("/delete/:id", async (req, res) => {
  try {
    await gallery.destroy({ where: { id: req.params.id } });
    res.send("deleted");
  } catch (e) {
    res.status(404).send(e.message);
  }
});

galleryRouter.post("/create", upload.single("gallery"), async (req, res) => {
  try {
    const { file, body } = req;
    const path = file.path;

    const newGallery = await gallery.create({ ...body, image: path });
    res.send(newGallery);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

galleryRouter.get("/download/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const imgData = await (
      await gallery.findOne({ where: { gallery_id: id } })
    ).toJSON();
    const { image } = imgData;
    res.download(image);
  } catch (e) {
    res.send({ message: "image not found" });
  }
});

export default galleryRouter;
