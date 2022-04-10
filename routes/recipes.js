const express = require('express');
const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index)

module.exports = router;