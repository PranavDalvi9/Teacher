const express = require("express");

const productController = require("./controllers/product.controller");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

app.use("/products", productController);

app.listen(2345, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.error("error is ", e.message);
  }
});
