const Ingredient = require("../models/ingredient");

module.exports = {
  index,
  create,
  delete: removeIng,
};

function index(req, res) {
  Ingredient.find({})
    .sort({ category: 1 })
    .exec(function (err, ingredient) {
      res.render("ingredients/list", { ingredient, title: "Ingredients List" });
    });
}

function create(req, res) {
  req.body.like = !!req.body.like;
  req.body.user = req.user._id;
  req.body.ingredient = req.body.ingredient.toUpperCase();
  const ingredient = new Ingredient(req.body);
  ingredient.save(function () {
    res.redirect("ingredients");
  });
}

function removeIng(req, res){
  Ingredient.findOneAndDelete(req.body.remove, function(err, ingredient){
    if (!ingredient.user.equals(req.user._id)) return res.redirect(`/ingredients`);
    else(res.redirect("ingredients"))
  })
}

