const express = require("express");
const expressRouter = express.Router();
const path = require("path");

const components = {
  title: "CTA",
  header: "Header",
  features: "Features",
  promo: "Promo",
  cta: "CTA",
  footer: "Footer",
};

Object.entries(components).forEach(([name, folder]) => {
  expressRouter.get(`/get-${name}-component`, (_, res) => {
    res.type("text/html");
    res.sendFile(path.join(__dirname, `../components/${folder}/index.html`));
  });
});

module.exports = expressRouter;
