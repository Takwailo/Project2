const express = require('express');
const router = require('express').Router();
const ingredientsCtrl = require('../controllers/ingredients');
const isLoggedIn = require('../config/auth')

router.get('/', ingredientsCtrl.index)
router.post('/', isLoggedIn, ingredientsCtrl.create)
router.delete('/', isLoggedIn, ingredientsCtrl.delete)

module.exports = router;