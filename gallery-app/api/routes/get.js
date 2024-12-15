const express = require("express");
const expressRouter = express.Router();
const path = require("path");

const titleController = (req, res) => {
  res.sendFile(path.join(__dirname, "../components/GET/title.html"));
};

expressRouter.use("/title", titleController);

module.exports = expressRouter;
