var express = require("express");
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categories.controller");

var router = express.Router();

router.post("/createCategory", createCategory);
router.get("/getAllCategories", getAllCategories);

module.exports = router;
