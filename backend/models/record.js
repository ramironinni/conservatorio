const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema(
    {
        bookName: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        studentCondition: {
            type: String,
            required: true,
        },
        courseName: {
            type: String,
            required: true,
        },
        subjectName: {
            type: String,
            required: true,
        },
        users: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
