const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

// MongoDB Assignment
// STORY
// We are building an E-commerce database and we want to be able to respond to following conditions in our apis
// Write apis that can handle the below cases
// get api for all products -- DONE
// find all products which are higher than Rs.500 -- DONE
// find all the products which are available in more than 3 different colours -- DONE
// find all the products which have atleast 1 colour that matches. -- DONE
// find the product which has the most colours. -- DONE
// find the products which can be used by men and women. -- DONE
// find the total number of products on the site ( for e.g :- If 1 product has 3 colours then it counts as 3 products ) -- DONE
// find the colour which has the most products.
// NOTE :- Approach this by thinking how the queries will run based on requirements and then structure your tables and also consider the principles taught.

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    let products;
    let filter = { $and: [{}], $or: [{}] };

    if (req.query.price) {
      filter.price = { $gt: req.query.price };
    }
    if (req.query.colors) {
      const colors = req.query.colors.split(",");

      //   db.users.find({ price: {$gt: 500}, colors: "red" });
      //   db.users.find({ price: {$gt: 500}, colors: {$in: ["white", "red"]} });

      filter.colors = { $in: colors };
    }
    if (req.query.mustColors) {
      const colors = req.query.mustColors.split(",");

      //   db.users.find({ price: {$gt: 500}, colors: "red" });
      //   db.users.find({ price: {$gt: 500}, colors: {$in: ["white", "red"]} });
      // db.users.find({ price: {$gt: 500}, {$and: [{colors: red}, {colors: yellow}]}});
      // filters.$and = [{ colors: "red", colors: "yellow" }];
      const mustColors = colors.map((color) => {
        return {
          colors: color,
        };
      });

      filter.$and = [...filter.$and, ...mustColors];
    }
    if (req.query.mustGender) {
      const genders = req.query.mustGender.split(",");

      // db.users.find({}, {$and: [{gender: "men"}, {gender: "women"}]})
      // filters.$and = [{ colors: "red"}, {colors: "yellow" }, {gender: "men"}, {gender: "women"}];
      const mustGenders = genders.map((gender) => {
        return {
          gender: gender,
        };
      });
      filter.$and = [...filter.$and, ...mustGenders];
    }

    if (req.query.orGender) {
      const genders = req.query.orGender.split(",");

      // db.users.find({}, {$or: [{gender: "men"}, {gender: "women"}]})
      const orGenders = genders.map((gender) => {
        return {
          gender: gender,
        };
      });
      filter.$or = [...filter.$or, ...orGender];
    }

    products = await Product.find(filter).lean().exec();
    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/colors/:numberOfColors", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    const finalProducts = products.filter((product) => {
      return product.colors.length >= req.params.numberOfColors;
    });

    return res.status(200).send(finalProducts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/max-colors", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    let finalProducts = products.map((product) => {
      return product.colors.length;
    });

    const maxLength = Math.max(...finalProducts);

    finalProducts = products.filter((product) => {
      return product.colors.length === maxLength;
    });

    return res.status(200).send(finalProducts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/products-count", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();

    let productCount = 0;

    products.map((product) => {
      productCount += product.colors.length;
    });

    return res.status(200).send({ productCount });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/color-with-most-products", async (req, res) => {
  try {
    const allColors = await Product.distinct("colors").lean().exec();
    const colorsWithCount = {};

    async function calculateProductColorCount() {
      for (color of allColors) {
        const productCount = await Product.find({
          colors: color,
        }).countDocuments();

        colorsWithCount[color] = productCount;
      }
    }
    await calculateProductColorCount();

    const maxProductCount = Math.max(...Object.values(colorsWithCount));

    const finalColors = Object.keys(colorsWithCount).filter(
      (color) => colorsWithCount[color] == maxProductCount
    );

    // const products = await Product.find().lean().exec();
    return res.status(200).send({ finalColors });

    // let productCount = 0;

    // products.map((product) => {
    //   productCount += product.colors.length;
    // });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
