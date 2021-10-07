// require modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// require routes
const usersRouter = require('./routes/users');

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

// ----- MIDDLEWARES -----
app.use(express.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

// ROUTES
app.use('/users', usersRouter);
