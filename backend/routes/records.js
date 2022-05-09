const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const recordsController = require('../controllers/records');

router.get('/', recordsController.getAll);
router.get('/id/:id', recordsController.getById);
router.post(
    '/create',
    [
        check('bookName').not().isEmpty(),
        check('number').not().isEmpty().isLength({ max: 4 }),
    ],
    recordsController.create
);
router.delete('/delete/:id', recordsController.deleteById);
router.patch('/update/:id', recordsController.updateById);

module.exports = router;
