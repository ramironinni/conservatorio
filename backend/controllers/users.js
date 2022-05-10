const User = require('../models/user');
const HttpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const usersController = {
    getAll: async (req, res, next) => {
        let users;

        try {
            users = await User.find({}, '-password');
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
    getByQuery: async (req, res, next) => {
        const query = new RegExp(req.params.query, 'gi');

        let users;

        try {
            users = await User.find({
                $or: [{ firstName: query }, { lastName: query }],
            });
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not find a user using the provided query',
                500
            );
            return next(error);
        }

        if (!users) {
            const error = new HttpError(
                'Could not find a user for the provided query',
                404
            );
            return next(error);
        }

        res.json({
            data: {
                users: users.map((user) => user.toObject({ getters: true })),
            },
        });
    },
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

        const { firstName, lastName, email, password, image, records } =
            req.body;

        let existingUser;

        try {
            existingUser = await User.findOne({ email: email });
        } catch (err) {
            const error = new HttpError(
                'Signing up failed, please try again later.',
                500
            );
            return next(error);
        }

        if (existingUser) {
            const error = new HttpError(
                'User exists already, please login instead.',
                422
            );
            return next(error);
        }

        let createdUser;

        const user = new User({
            firstName,
            lastName,
            email,
            password,
            image: 'https://via.placeholder.com/150',
            records,
        });

        try {
            createdUser = await user.save();
        } catch (err) {
            const error = new HttpError(
                'Signing up failed, please try again later.',
                500
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

        res.status(201).json({ user: createdUser.toObject({ getters: true }) });
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
    updateById: async (req, res, next) => {
        const { firstName, lastName } = req.body;
        const userId = req.params.id;

        let user;

        try {
            user = await User.findById(req.params.id);
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not updat the user',
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

        user.firstName = firstName;
        user.lastName = lastName;

        try {
            await user.save();
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not updat the user',
                500
            );
            return next(error);
        }

        res.status(200).json({ user: user.toObject({ getters: true }) });

        //

        // res.status(200).json({ user: 'the data of the updated user' });
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;

        // needs validation

        let existingUser;

        try {
            existingUser = await User.findOne({ email: email });
        } catch (err) {
            const error = new HttpError(
                'Loggin in failed, please try again later.',
                500
            );
            return next(error);
        }

        if (!existingUser || existingUser.password !== password) {
            const error = new HttpError(
                'Invalid creadentials, could not log you in.',
                401
            );
            return next(error);
        }

        return next({ message: 'Logged in' });
    },
};

module.exports = usersController;
