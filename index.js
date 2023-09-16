const fs = require("fs");
// const index = fs.readFileSync("./index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const products = data.products;
// const path = require("path");
const PORT = 4000;
const express = require("express");
const app = express();

app.use(express.json()); // builtin middleware
app.use(express.static("public")); // builtin middleware
// app.use(express.urlencoded()); // builtin middleware

const auth = (req, res, next) => {
  //   if (req.query.password === "123") {
  if (req.body.password === "123") {
    // console.log("authorize");
    next();
  } else {
    res.sendStatus(401);
  }
};

app.get("/", auth, (req, res) => {
  res.status(200).send({ type: req.method });
});

app.post("/", (req, res) => {
  res.status(200).send({ type: req.method });
});

app.put("/", (req, res) => {
  res.status(200).send({ type: req.method });
});

app.delete("/", (req, res) => {
  res.status(200).send({ type: req.method });
});

app.patch("/", (req, res) => {
  res.status(200).send({ type: req.method });
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
