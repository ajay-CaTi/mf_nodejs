// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
// const products = data.products;
const model = require("../model/inprod");
const Product = model.Product;

// POST Create product
exports.createProduct = async (req, res) => {
  // const product = req.body;
  // console.log(req.body);
  // products.push(product);
  // res.status(200).send(product);
  try {
    const product = new Product(req.body);
    await product.save();
    console.log(product);
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// GET Read all Products
exports.getAllProd = async (req, res) => {
  // res.status(200).send(products);
  const product = await Product.find();
  console.log(product);
  res.status(200).send(product);
};

// Get Read single product
exports.getSinglePod = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).send(product);
};

// PUT Replace product
exports.replaceProd = async (req, res) => {
  // const id = +req.params.id;
  // console.log(typeof id);
  // const productIndex = products.findIndex((p) => p.id === id);
  // products.splice(productIndex, 1, { ...req.body, id: id });
  // res.status(200).send({ result: "success" });
  try {
    const id = req.params.id;
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    await product.save();
    console.log(product);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// PATCH Update product
exports.updateProd = async (req, res) => {
  // const id = +req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  // res.status(200).send({ result: "success" });
  try {
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    await product.save();
    console.log(product);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

// DELETE Delete product
exports.deleteProd = async (req, res) => {
  // const id = +req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);
  // res.status(200).send(product);
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id });

    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
