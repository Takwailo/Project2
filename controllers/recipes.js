const request = require('request');


function index(req, res){
        res.render('recipes/index', {title: "All Recipes"})
    }

function addRecipe(req, res){
    res.render('recipes/new', {title: 'Add New Recipes'})
}

module.exports = {
    index,
    new: addRecipe,
  };