const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/search/:query', usersController.listFiltered);
router.get('/id/:id', usersController.getById);
router.post(
    '/create',
    [
        check('firstName').not().isEmpty(),
        check('lastName').not().isEmpty().isLength({ max: 60 }),
    ],
    usersController.create
);
router.delete('/delete/:id', usersController.deleteById);
router.patch('/update/:id', usersController.updateById);
router.post('/login', usersController.login);

module.exports = router;
