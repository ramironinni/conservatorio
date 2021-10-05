const express = require('express');
const usersRouter = require('./routes/users');
const app = express();

app.listen(5000);

app.use('/users', usersRouter);
