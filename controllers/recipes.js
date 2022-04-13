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
  console.log(req.body);
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
      Ingredient.find({}, function (err, ingredients) {
        res.render("recipes/edit", {
          ingredients,
          recipe,
          title: "edit recipe",
        });
      });
    });
}

function update(req, res){
  Recipe.findById(req.params.id)
  .update(req.body)
  .exec(function (err, recipe){
    res.redirect("/recipes")
  })
}

function deleteIng(req, res){
Ingredient.findOne({ ingredient:`${req.body.ing}`})
.then(function (doc) {
  let ingId = doc._id
  console.log(ingId)
  console.log(req.params.id)
  Recipe.findById(req.params.id)
    .remove({ ingredients: `${ingId}`})
    .exec(function (err) {
      if (err) next(err);
      res.redirect(`/recipes/${req.params.id}/edit`)
    })
  })
};


module.exports = {
  index,
  new: addRecipe,
  create,
  show,
  delete: removeRecipe,
  edit,
  update,
  deleteIng
};
