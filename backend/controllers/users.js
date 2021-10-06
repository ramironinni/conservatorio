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
    create: async (req, res) => {
        // const user = new User({ firstName: 'Ann', lastName: 'Estelle' });
        // try {
        //     const userCreated = await user.save();
        //     res.send(userCreated);
        // } catch (error) {
        //     console.log(err);
        // }
        console.log(req.body);
    },
    delete: (req, res) => {},
    update: (req, res) => {},
};

module.exports = usersController;
