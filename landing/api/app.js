const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8000;
const app = express();

const getRoutes = require("./routes/get");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.use("/api", getRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
