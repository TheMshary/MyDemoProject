const express = require("express");
const cookies = require("./cookies");
const app = express();

app.get("/cookies", (req, res) => {
  res.json(cookies);
});

app.get("/", (req, res) => {
  console.log("Jerry? HELLOOOOOO.");
  res.json({ message: "Hello Uncle Leo" });
});

app.listen(8000, () => {
  console.log("Application is running on localhost:8000");
});
