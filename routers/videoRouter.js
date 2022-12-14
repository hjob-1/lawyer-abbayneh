import express from "express";
import { video } from "../models/video.js";

const videoRouter = express.Router();

videoRouter.get("/", async (req, res) => {
  const videos = await video.findAll();
  res.send(videos);
});

videoRouter.post("/create", async (req, res) => {
  const created = await video.create(req.body);
  res.send(created);
});
videoRouter.delete("/delete/:video_id", async (req, res) => {
  const created = await video.destroy({
    where: { video_id: req.params.video_id },
  });
  res.send(created);
});

videoRouter.put("/update/:video_id", async (req, res) => {
  const updated = await video.update(
    { ...req.body },
    { where: { video_id: req.params.video_id } }
  );
  res.send(updated);
});

export default videoRouter;
