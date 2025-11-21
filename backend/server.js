const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://mongo-service:27017/testdb")
  .then(() => console.log("Mongo Connected"))
  .catch((err) => console.log(err));

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
