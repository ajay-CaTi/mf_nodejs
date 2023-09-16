const productController = require("./controller/product");
const PORT = 4000;
const express = require("express");
const productRouter = express.Router();
// const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", productRouter);
// app.use(morgan("default"));

productRouter
  .post("/products", productController.createProduct)
  .get("/products", productController.getAllProducts)
  .get("/products/:id", productController.getProduct)
  .put("/products/:id", productController.replaceProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
