const Ingredient = require('../models/ingredient')

module.exports = {
    index,
  };

  function index(req, res){
    Ingredient.find({}), function(err, ingredient){
        res.render('ingredients')
    }
}