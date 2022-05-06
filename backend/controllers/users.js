const User = require('../models/user');
const HttpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const usersController = {
    getAll: async (req, res, next) => {
        let users;

        try {
            users = await User.find();
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not find all the users',
                500
            );
            return next(error);
        }

        if (!users) {
            const error = new HttpError('Could not find the users', 404);
            return next(error);
        }

        res.json(users);
    },
    listFiltered: async (req, res) => {},
    getById: async (req, res, next) => {
        let user;

        try {
            user = await User.findById(req.params.id);
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not find a user',
                500
            );
            return next(error);
        }

        if (!user) {
            const error = new HttpError(
                'Could not find a user for the provided id',
                404
            );
            return next(error);
        }

        res.json({ user: user.toObject({ getters: true }) });
    },
    create: async (req, res, next) => {
        const errors = validationResult(req);

        if (errors.errors.length !== 0) {
            return next(new HttpError('Invalid inputs', 422));
        }

        const { firstName, lastName } = req.body;

        let createdUser;

        try {
            const user = new User({
                firstName,
                lastName,
            });

            createdUser = await user.save();
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not create a new user',
                404
            );
            return next(error);
        }

        if (!createdUser) {
            const error = new HttpError(
                'Something went wrong, could not create a new user',
                500
            );
            return next(error);
        }

        res.status(201).json(createdUser);
    },
    deleteById: async (req, res, next) => {
        const id = req.params.id;

        let deletedUser;

        try {
            deletedUser = await User.findByIdAndDelete(id);
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not delete the user',
                404
            );
            return next(error);
        }

        if (!deletedUser) {
            const error = new HttpError('Something went wrong', 500);
            return next(error);
        }

        res.status(200).json({ message: 'User has been deleted' });
    },
    updateById: (req, res) => {
        const { firstName, lastName } = req.body;
        const userId = req.params.id;

        // db logic

        res.status(200).json({ user: 'the data of the updated user' });
    },
    login: (req, res, next) => {
        try {
            const { email, password } = req.body;

            // get from db
            const identifiedUser = { email: 'test@test.com', password: 'test' };

            if (!identifiedUser || identifiedUser.password !== password) {
                throw new HttpError('Wrong credentials', 401);
            }

            res.json({ message: 'Logged in' });
        } catch (error) {
            next(error);
        }
    },
};

module.exports = usersController;
