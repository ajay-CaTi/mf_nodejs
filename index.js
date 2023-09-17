const PORT = 4000;
const mongoose = require("mongoose");
const express = require("express");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
// const model = require("../model/product");
// const Product = model.Product; // just before product creation
// const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);
// app.use(morgan("default"));

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDb");
  console.log("Db connected");
}

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
