const request = require("request");
const Ingredients = require("../models/ingredient");
const Recipes = require("../models/recipe");

function index(req, res) {
  res.render("recipes/index", { title: "All Recipes" });
}

function addRecipe(req, res) {
  Ingredients.find({}, function (err, ingredient) {
      console.log(ingredient)
    res.render("recipes/new", {ingredient, title: "Add New Recipes" });
  });
}

module.exports = {
  index,
  new: addRecipe,
};
