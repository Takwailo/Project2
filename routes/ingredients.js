const express = require('express');
const router = require('express').Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.get('/', ingredientsCtrl.index)

module.exports = router;