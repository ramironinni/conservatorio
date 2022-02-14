// require modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// require routes
const usersRouter = require('./routes/users');
const HttpError = require('./models/http-error');

// instantiate express
const app = express();

// config env
dotenv.config();

// connect to MongoDB
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.m3iwz.mongodb.net/conservatorioDB?retryWrites=true&w=majority`;
mongoose
    .connect(dbURI)
    .then((result) => {
        app.listen(5000);
    })
    .catch((err) => {
        console.log(err);
    });

// CORS Headers => Required for cross-origin/ cross-server communication
app.use(cors());

// ----- MIDDLEWARES -----
// Used to parse JSON bodies (former body-parser)
app.use(express.json());

// ROUTES
app.use('/api/users', usersRouter);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error ocurred!' });
    // res.json({ message: error.message || 'An unknown error ocurred!' });
});
