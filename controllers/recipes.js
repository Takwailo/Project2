const request = require("request");
const Ingredient = require("../models/ingredient");
const recipe = require("../models/recipe");
const Recipe = require("../models/recipe");

function index(req, res) {
  Recipe.find({}).exec(function (err, recipes) {
    res.render("recipes/index", { recipes, title: "All Recipes" });
  });
}

function addRecipe(req, res) {
  const newRecipe = new Recipe();
  Ingredient.find({}, function (err, ingredient) {
    res.render("recipes/new", { ingredient, title: "Add New Recipes" });
  });
}

function create(req, res) {
  const recipe = new Recipe(req.body);
  console.log(recipe)
  recipe.save(function (err) {
    console.log(err);
    res.redirect("recipes");
  });
}

function show (req, res){
    Recipe.findById(req.params.id)
    .populate('ingredients')
    .exec(function (err,recipe){
        console.log(recipe)
        res.render('recipes/show', {title: '123'})
    })
}

module.exports = {
  index,
  new: addRecipe,
  create,
  show,
};
