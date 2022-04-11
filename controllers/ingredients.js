const Ingredient = require("../models/ingredient");

module.exports = {
  index,
  create,
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
  const ingredient = new Ingredient(req.body);
  ingredient.save(function () {
    res.redirect("ingredients");
  });
}
