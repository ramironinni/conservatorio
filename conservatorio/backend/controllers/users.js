const dummyUsers = require('../dummy-users');
const User = require('../models/user');

const usersController = {
    listAll: async (req, res) => {
        try {
            const usersList = await User.find();
            res.send(usersList);
        } catch (error) {
            console.log(error);
        }
    },
    listOne: async (req, res) => {
        try {
            const userFound = await User.findById('615dc83bf792312969c41b5d');
            res.send(userFound);
        } catch (error) {
            console.log(error);
        }
    },
    add: async (req, res) => {
        const user = new User({ firstName: 'Ann', lastName: 'Estelle' });
        try {
            const userAdded = await user.save();
            res.send(userAdded);
        } catch (error) {
            console.log(err);
        }
    },
};

module.exports = usersController;
