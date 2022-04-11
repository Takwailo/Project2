const express = require('express');
const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index)
router.get('/new',recipesCtrl.new)
router.post('/', recipesCtrl.create)

module.exports = router;