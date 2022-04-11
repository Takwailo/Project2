const Ingredient = require('../models/ingredient')

module.exports = {
    index,
  };

  function index(req, res){
    Ingredient.find({}, function(err, ingredient){
      console.log(err, ingredient)
      res.render('ingredients/list', {title:'Ingredients List'})
    })
}