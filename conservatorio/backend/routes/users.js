const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/list', usersController.listAll);
router.get('/id/:id', usersController.listOne);
router.get('/add', usersController.add);

module.exports = router;
