const productController = require("./controller/product");
const PORT = 4000;
const express = require("express");
const productRouter = express.Router();
// const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.static("public"));
// app.use(morgan("default"));

//  C R U D

// Create POST /products
app.post("/products", productController.createProduct);

// Read GET products
app.get("/products", productController.getAllProducts);

// Read GET single product
app.get("/products/:id", productController.getProduct);

// UPDATE PUT /products
app.put("/products/:id", productController.replaceProduct);

// UPDATE PATCH /products
app.patch("/products/:id", productController.updateProduct);

//  DELETE /products
app.delete("/products/:id", productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
