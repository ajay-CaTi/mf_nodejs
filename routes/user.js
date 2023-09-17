const productController = require("../controller/user");
const express = require("express");
const router = express.Router();

router
  .post("/", productController.createUsers)
  .get("/", productController.getAllUsers)
  .get("/:id", productController.getUser)
  .put("/:id", productController.replaceUser)
  .patch("/:id", productController.updateUser)
  .delete("/:id", productController.deleteUser);

exports.router = router;
