// const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// Create POST /products
exports.createProduct = (req, res) => {
  // const date = new Date();
  // console.log(req.body);
  // products.push(req.body);
  try {
    const product = new Product(req.body);
    product.save();
    console.log(product);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
  }
};

// Read GET products
exports.getAllProducts = async (req, res) => {
  // res.send(products);
  try {
    const product = await Product.find();
    console.log(product);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
  }
};

// Read GET single product
exports.getProduct = async (req, res) => {
  // const id = +req.params.id;
  // const product = products.find((p) => p.id === id);
  // console.log(product);
  // res.status(200).send(product);
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    console.log(product);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
};

// PUT Replace /products
exports.replaceProduct = async (req, res) => {
  // try {
  //   const id = +req.params.id;
  //   console.log("id");
  //   const productIndex = products.findIndex((p) => p.id === id);
  //   products.splice(productIndex, 1, { ...req.body, id: id });
  //   res.status(201).json({ result: "success" });
  // } catch (error) {
  //   console.log(error);
  //   res.status(404).json({ result: "failed" });
  // }
  try {
    const id = req.params.id;
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    await product.save();
    console.log(product);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// UPDATE PATCH /products
exports.updateProduct = async (req, res) => {
  // const id = +req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  // res.status(201).json({ result: "success" });
  try {
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    await product.save();
    console.log(product);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

//  DELETE /products
exports.deleteProduct = async (req, res) => {
  // const id = +req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);
  // res.status(201).json({ result: product });
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
