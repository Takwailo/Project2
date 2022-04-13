const Ingredient = require("../models/ingredient");
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
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  const recipe = new Recipe(req.body);
  recipe.save(function (err) {
    console.log(err);
    res.redirect("recipes");
  });
}

function show(req, res) {
  Recipe.findById(req.params.id)
    .populate("ingredients")
    .exec(function (err, recipe) {
      Ingredient.find(
        { _id: { $nin: recipe.ingredients } },
        function (err, ingredients) {
          res.render("recipes/show", {
            recipe,
            ingredients,
            title: `${recipe.title}`,
          });
        }
      );
    });
}

function removeRecipe(req, res, next) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (!recipe.user.equals(req.user._id)) return res.redirect(`/recipes`);
    recipe.remove();
    recipe.save(function (err) {
      if (err) next(err);
      res.redirect("/recipes");
    });
  });
}

function edit(req, res) {
  Recipe.findById(req.params.id)
    .populate("ingredients")
    .exec(function (err, recipe) {
      if (!recipe.user.equals(req.user._id))
        return res.redirect(`/recipes/${req.params.id}`);
      Ingredient.find({}, function (err, ingredients) {
        res.render("recipes/edit", {
          ingredients,
          recipe,
          title: "edit recipe",
        });
      });
    });
}

function update(req, res) {
  Recipe.findById(req.params.id)
    .update(req.body)
    .exec(function (err, recipe) {
      res.redirect("/recipes");
    });
}

function deleteIng(req, res) {
  Ingredient.findOne({ ingredient: `${req.body.ing}` }).then(function (doc) {
    let ingId = doc._id;
    Recipe.findById(req.params.id, function (err, recipe) {
      if (!recipe.user.equals(req.user._id))
        return res.redirect(`/recipes/${req.params.id}`);
      let index = recipe.ingredients.indexOf(ingId);
      recipe.ingredients.splice(index, 1);
      recipe.save(function (err) {
        res.redirect(`/recipes/${req.params.id}/edit`);
      });
    });
  });
}

function deleteMethod(req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
    if (!recipe.user.equals(req.user._id))
      return res.redirect(`/recipes/${req.params.id}`);
    let index = recipe.method.indexOf(req.body.method);
    recipe.method.splice(index, 1);
    recipe.save(function (err) {
      res.redirect(`/recipes/${req.params.id}/edit`);
    });
  });
}

function addIng(req, res){
  Recipe.findById(req.params.id, function(err, recipe){
    recipe.ingredients.push(req.body.ingredients)
    recipe.save(function(err){
      res.redirect(`/recipes/${req.params.id}/edit`);
    })
  }
)}

function addMethod (req, res){
  Recipe.findById(req.params.id, function(err, recipe){
    let index = req.body.index - 1
    recipe.method.splice(index, 0, req.body.method)
    recipe.save(function(err){
      res.redirect(`/recipes/${req.params.id}/edit`);
    })
  })
}

module.exports = {
  index,
  new: addRecipe,
  create,
  show,
  delete: removeRecipe,
  edit,
  update,
  deleteIng,
  deleteMethod,
  addIng,
  addMethod,
};
