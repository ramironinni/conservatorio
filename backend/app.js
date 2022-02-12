// require modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

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

// CORS Headers => Required for cross-origin/ cross-server communication
app.use(cors());

// ----- MIDDLEWARES -----
// Used to parse JSON bodies (former body-parser)
app.use(express.json());

// ROUTES
app.use('/api/users', usersRouter);
