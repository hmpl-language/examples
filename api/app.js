const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000;
const app = express();
const routes = require("./routes/get");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.set(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.use("/api", routes);

app.listen(PORT);
