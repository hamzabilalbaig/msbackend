var express = require("express");
const {
  createItem,
  getAllItems,
  deleteItem,
  getAllItemsByCategory,
} = require("../controllers/items.controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

var router = express.Router();

router.post("/createItem", upload.single("image"), createItem);
router.get("/getAllItems", getAllItems);
router.delete("/deleteItem/:id", deleteItem);
router.post("/getAllItemsByCategory", getAllItemsByCategory);

module.exports = router;
