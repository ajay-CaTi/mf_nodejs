const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
const users = data.users;

// Create POST /const users = data.users;

exports.createUsers = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(200).send(req.body);
};

// Read GET users
exports.getAllUsers = (req, res) => {
  res.send(users);
};

// Read GET single product
exports.getUser = (req, res) => {
  const id = +req.params.id;
  const product = users.find((p) => p.id === id);
  console.log(product);
  res.send(product);
};

// UPDATE PUT /users
exports.replaceUser = (req, res) => {
  try {
    const id = +req.params.id;
    console.log("id");
    const productIndex = users.findIndex((p) => p.id === id);
    users.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json({ result: "success" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ result: "failed" });
  }
};

// UPDATE PATCH /users
exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ result: "success" });
};

//  DELETE /users
exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1);
  res.status(201).json({ result: product });
};
