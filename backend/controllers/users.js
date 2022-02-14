const User = require('../models/user');
const HttpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const usersController = {
    listAll: async (req, res, next) => {
        try {
            const usersList = await User.find();
            res.json(usersList);
        } catch (error) {
            next(error);
        }
    },
    listFiltered: async (req, res) => {},
    listOne: async (req, res, next) => {
        try {
            const foundUser = await User.findById(req.params.id);

            // if (!foundUser) {
            //     return res.status(404).json({ message: 'User not found' });
            // }

            const data = {
                createdAt: foundUser.createdAt,
                updatedAt: foundUser.updatedAt,
                user: {
                    id: foundUser._id,
                    firstName: foundUser.firstName,
                    lastName: foundUser.lastName,
                },
            };

            res.json(data);
        } catch (error) {
            // return res.status(404).json({ message: 'ERROR' });
            // next(
            //     throw new HttpError(
            //         'Could not find a user for the provided id',
            //         404
            //     )
            // );
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const errors = validationResult(req);

            if (errors.errors.length !== 0) {
                throw new HttpError('Invalid inputs', 422);
            }

            const { firstName, lastName } = req.body;

            const user = new User({
                firstName,
                lastName,
            });

            const createdUser = await user.save();
            res.status(201).json(createdUser);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        const id = req.params.id;

        try {
            const deletedUser = await User.findByIdAndDelete(id);
            // res.status(200).json(deletedUser);
            res.status(200).json({ message: 'User has been deleted' });
        } catch (error) {
            next(error);
        }
    },
    update: (req, res) => {
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
