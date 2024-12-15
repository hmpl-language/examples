const express = require("express");
const expressRouter = express.Router();

const imagePaths = [
  "http://localhost:8000/images/img1.jpg",
  "http://localhost:8000/images/img2.jpg",
  "http://localhost:8000/images/img3.jpg",
  "http://localhost:8000/images/img4.jpg",
  "http://localhost:8000/images/img5.jpg",
  "http://localhost:8000/images/img6.jpg",
  "http://localhost:8000/images/img7.jpg",
  "http://localhost:8000/images/img8.jpg",
  "http://localhost:8000/images/img9.jpg",
  "http://localhost:8000/images/img10.jpg",
];

const imagesController = (req, res) => {
  const { page } = req.body;

  if (!page || isNaN(page)) {
    return res.status(400).send("Page number error");
  }

  const pageNumber = parseInt(page);
  const itemsPerPage = 5;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (startIndex >= imagePaths.length || pageNumber < 1) {
    return res.status(404).send("Page not found");
  }

  const imagesForPage = imagePaths.slice(startIndex, endIndex);

  const htmlResponse = `
      ${imagesForPage
        .map((img, index) => `<img src="${img}" alt="Image${index}"/>`)
        .join("\n")}
  `;

  res.send(htmlResponse);
};

expressRouter.post("/images", imagesController);

module.exports = expressRouter;
