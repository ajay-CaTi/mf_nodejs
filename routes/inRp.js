const express = require("express");
const router = express.Router();
const prodController = require("../controller/inCp");

// POST Create product
router
  .post("/", prodController.createProduct)
  .get("/", prodController.getAllProd)
  .get("/:id", prodController.getSinglePod)
  .put("/:id", prodController.replaceProd)
  .patch("/:id", prodController.updateProd)
  .delete("/:id", prodController.deleteProd);

exports.router = router;
