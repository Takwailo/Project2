const request = require("request");
const Ingredient = require("../models/ingredient");
const Recipe = require("../models/recipe");

function index(req, res) {
    Recipe.find({})
    .exec(function (err, recipes){
        res.render("recipes/index", {recipes, title: "All Recipes" });
    })
}

function addRecipe(req, res) {
  const newRecipe = new Recipe();
  Ingredient.find({}, function (err, ingredient) {
    res.render("recipes/new", { ingredient, title: "Add New Recipes" });
  });
}

function create(req, res){
    const recipe = new Recipe(req.body)
    recipe.save(function(err){
        console.log(err)
        res.redirect('recipes')
    })
}

module.exports = {
  index,
  new: addRecipe,
  create,
};
