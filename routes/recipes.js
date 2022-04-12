const express = require('express');
const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth')

router.get('/', recipesCtrl.index)
router.get('/new', isLoggedIn, recipesCtrl.new)
router.get('/:id', recipesCtrl.show)
router.post('/', recipesCtrl.create)

module.exports = router;