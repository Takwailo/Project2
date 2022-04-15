const express = require('express');
const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth')

router.get('/', recipesCtrl.index)
router.get('/new', isLoggedIn, recipesCtrl.new)

router.get('/:id', recipesCtrl.show)
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit)
router.put('/:id', recipesCtrl.update)
router.put('/:id/AddIngredient', recipesCtrl.addIng)
router.put('/:id/AddingMethod', recipesCtrl.addMethod)
router.post('/', recipesCtrl.create)
router.post('/search', recipesCtrl.search)
router.delete('/:id', recipesCtrl.delete)
router.delete('/:id/RemoveIngredient', recipesCtrl.deleteIng)
router.delete('/:id/RemoveMethod', recipesCtrl.deleteMethod)

module.exports = router;