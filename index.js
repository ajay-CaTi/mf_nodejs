// const index = fs.readFileSync("./index.html", "utf-8");
// const path = require("path");

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
const products = data.products;
const PORT = 4000;
const express = require("express");
// const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.static("public"));
// app.use(morgan("default"));

//  C R U D

// Create POST /products
app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(200).send(req.body);
});

// Read GET products
app.get("/products", (req, res) => {
  res.send(products);
});

// Read GET single product
app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  console.log(product);
  res.send(product);
});

// UPDATE PUT /products
app.put("/products/:id", (req, res) => {
  try {
    const id = +req.params.id;
    console.log("id");
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json({ result: "success" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ result: "failed" });
  }
});

// UPDATE PATCH /products
app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ result: "success" });
});

//  DELETE /products
app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json({ result: product });
});

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
