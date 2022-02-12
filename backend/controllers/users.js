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
    listFiltered: async (req, res) => {},
    listOne: async (req, res) => {
        try {
            const foundUser = await User.findById(req.params.id);

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
            res.json(createdUser);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            const deletedUser = await User.findByIdAndDelete(id);
            console.log('user deleted');
            res.json(deletedUser);
        } catch (error) {
            console.log(error);
        }
    },
    update: (req, res) => {},
    login: (req, res) => {},
};

module.exports = usersController;
