const express = require("express");
const expressRouter = express.Router();
const path = require("path");

const controller1 = (req, res) => {
  res.sendFile(path.join(__dirname, "../serverHTML/GET/test.html"));
};

expressRouter.use("/test", controller1);

const controller2 = (req, res) => {
  res.sendFile(path.join(__dirname, "../serverHTML/GET/avatar.html"));
};

expressRouter.use("/avatar", controller2);

module.exports = expressRouter;
