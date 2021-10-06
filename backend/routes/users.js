const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.listAll);
router.get('/id/:id', usersController.listOne);
router.post('/create', usersController.create);
router.delete('/delete/:id', usersController.delete);
router.put('/update/:id', usersController.update);

module.exports = router;
