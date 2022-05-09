const Record = require('../models/record');
const HttpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const recordsController = {
    getAll: async (req, res, next) => {
        let records;

        try {
            records = await Record.find();
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not find all the records',
                500
            );
            return next(error);
        }

        if (!records) {
            const error = new HttpError('Could not find the records', 404);
            return next(error);
        }

        res.json(records);
    },
    getById: async (req, res, next) => {
        let record;

        try {
            record = await Record.findById(req.params.id);
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not find a record',
                500
            );
            return next(error);
        }

        if (!record) {
            const error = new HttpError(
                'Could not find a record for the provided id',
                404
            );
            return next(error);
        }

        res.json({ record: record.toObject({ getters: true }) });
    },
    create: async (req, res, next) => {
        const errors = validationResult(req);

        if (errors.errors.length !== 0) {
            return next(new HttpError('Invalid inputs', 422));
        }

        const {
            bookName,
            number,
            date,
            studentCondition,
            courseName,
            subjectName,
        } = req.body;

        let createdRecord;

        try {
            const record = new Record({
                bookName,
                number,
                date,
                studentCondition,
                courseName,
                subjectName,
            });

            createdRecord = await record.save();
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not create a new record',
                404
            );
            return next(error);
        }

        if (!createdRecord) {
            const error = new HttpError(
                'Something went wrong, could not create a new record',
                500
            );
            return next(error);
        }

        res.status(201).json(createdRecord);
    },
    deleteById: async (req, res, next) => {
        const id = req.params.id;

        let deletedRecord;

        try {
            deletedRecord = await Record.findByIdAndDelete(id);
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not delete the record',
                404
            );
            return next(error);
        }

        if (!deletedRecord) {
            const error = new HttpError('Something went wrong', 500);
            return next(error);
        }

        res.status(200).json({ message: 'Record has been deleted' });
    },
    updateById: async (req, res, next) => {
        const {
            bookName,
            number,
            date,
            studentCondition,
            courseName,
            subjectName,
        } = req.body;

        const recordId = req.params.id;

        let record;

        try {
            record = await Record.findById(req.params.id);
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not updat the record',
                500
            );
            return next(error);
        }

        if (!record) {
            const error = new HttpError(
                'Could not find a record for the provided id',
                404
            );
            return next(error);
        }

        record.bookName = bookName;
        record.bookName = bookName;
        record.number = number;
        record.date = date;
        record.studentCondition = studentCondition;
        record.courseName = courseName;
        record.subjectName = subjectName;

        try {
            await record.save();
        } catch (err) {
            const error = new HttpError(
                'Something went wrong, could not update the record',
                500
            );
            return next(error);
        }

        res.status(200).json({ record: record.toObject({ getters: true }) });

        //

        // res.status(200).json({ record: 'the data of the updated record' });
    },
};

module.exports = recordsController;
