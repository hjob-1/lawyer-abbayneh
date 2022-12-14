import express from "express";
import Message from "../models/message.js";

const messageRouter = express.Router();

messageRouter.post("/send", async (req, res) => {
  try {
    const newmessage = await Message.create(req.body);
    res.send(newmessage);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
messageRouter.get("/specific/:id", async (req, res) => {
  try {
    console.log("req params id", req.params.id);
    const message = await Message.findOne({
      where: { message_id: req.params.id },
    });
    res.send(message);
  } catch (e) {
    res.status(404).send({ message: "error occured" });
  }
});

messageRouter.get("/", async (req, res) => {
  try {
    let { page, size } = req.query;
    if (!size) {
      size = 10;
    }
    console.log("all messages");

    const skip = (parseInt(page) - 1) * size;

    const messages = await Message.findAll();

    const numOfPages = Math.ceil(messages.length / parseInt(size));

    const messagePerPage = await Message.findAll({
      limit: parseInt(size),
      offset: skip,
      order: [["createdAt", "DESC"]],
    });
    res.send({ pages: numOfPages, messages: messagePerPage });
  } catch (e) {
    res.status(404).send(e.message);
  }
});
messageRouter.delete("/delete/:id", async (req, res) => {
  try {
    await Message.destroy({
      where: { message_id: req.params.id },
    });
    res.send("deleted");
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default messageRouter;
