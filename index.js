const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello and welcome!");
});

app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
