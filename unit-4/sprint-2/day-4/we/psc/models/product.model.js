const mongoose = require("mongoose");

// MongoDB Assignment
// STORY
// We are building an E-commerce database and we want to be able to respond to following conditions in our apis
// Write apis that can handle the below cases
// get api for all products
// find all products which are higher than Rs.500
// find all the products which are available in more than 3 different colours
// find all the products which have atleast 1 colour that matches.
// find the product which has the most colours.
// find the products which can be used by men and women.
// find the total number of products on the site ( for e.g :- If 1 product has 3 colours then it counts as 3 products )
// find the colour which has the most products.
// NOTE :- Approach this by thinking how the queries will run based on requirements and then structure your tables and also consider the principles taught.

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    colors: [{ type: String, required: true }],
    gender: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
