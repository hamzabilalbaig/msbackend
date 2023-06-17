const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// const pg = require("pg");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Hello World! "));

var itemsRouter = require("./routes/items.routes");
var categoriesRouter = require("./routes/categories.routes");
app.use("/api/items", itemsRouter);
app.use("/api/categories", categoriesRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
