const request = require('request');


function index(req, res){
        res.render('recipes/index', {title: "All Recipes"})
    }


module.exports = {
    index,
  };