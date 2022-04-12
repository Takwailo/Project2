const express = require('express');
const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth')

router.get('/', recipesCtrl.index)
router.get('/new', isLoggedIn, recipesCtrl.new)
router.get('/:id', recipesCtrl.show)
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit)
router.put('/:id', recipesCtrl.update)
router.post('/', recipesCtrl.create)
router.delete('/:id', recipesCtrl.delete)

module.exports = router;