const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
const products = data.products;

// Create POST /products
exports.createProduct = (req, res) => {
  const date = new Date();
  console.log(req.body);
  products.push(req.body);
  res.status(200).send(req.body);
};

// Read GET products
exports.getAllProducts = (req, res) => {
  res.send(products);
};

// Read GET single product
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  console.log(product);
  res.send(product);
};

// UPDATE PUT /products
exports.replaceProduct = (req, res) => {
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
};

// UPDATE PATCH /products
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ result: "success" });
};

//  DELETE /products
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json({ result: product });
};
