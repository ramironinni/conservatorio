const dummyUsers = require('../dummy-users');
const User = require('../models/user');

const usersController = {
    listAll: async (req, res) => {
        try {
            const usersList = await User.find();
            res.json(usersList);
        } catch (error) {
            console.log(error);
        }
    },
    listOne: async (req, res) => {
        try {
            const foundUser = await User.findById(req.params.id);
            res.json(foundUser);
        } catch (error) {
            console.log(error);
            res.send("The user doesn't exist");
        }
    },
    create: async (req, res) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        try {
            const createdUser = await user.save();
            console.log(req.body);
            res.send(createdUser);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            const deletedUser = await User.findByIdAndDelete(id);
            res.send(deletedUser);
        } catch (error) {
            console.log(error);
        }
    },
    update: (req, res) => {},
};

module.exports = usersController;
