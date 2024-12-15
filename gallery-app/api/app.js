const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;
const app = express();

const getRoutes = require("./routes/get");
const postRoutes = require("./routes/post");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

const imagesFolder = path.join(__dirname, "./images");
app.use("/images", express.static(imagesFolder));

app.use(express.static(path.join(__dirname, "src")));

app.use((req, res, next) => {
  console.log("Body:", req.body);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.use("/api", getRoutes);
app.use("/api", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
