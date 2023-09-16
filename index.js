const fs = require("fs");
// const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const products = data.products;
const path = require("path");
const PORT = 4000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   console.log(path.resolve(__dirname, "index.html"));
  res.status(200).sendFile(path.resolve(__dirname, "index.html")); // can send  a file over a perticulat api
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
