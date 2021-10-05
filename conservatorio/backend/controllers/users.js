const dummyUsers = require('../dummy-users');

const usersController = {
    list: (req, res) => {
        res.send(dummyUsers);
    },
};

module.exports = usersController;
