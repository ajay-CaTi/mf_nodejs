const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/inRp");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/products", productRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDb");
  console.log("Db connected");
}

app.listen(5000, () => {
  console.log(`Serevr run on port 5000`);
});
