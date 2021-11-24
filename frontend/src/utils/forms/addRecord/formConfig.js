import { createFormFieldConfig } from '../createFormFieldConfig';
import { data } from './data';

import { isRequired, isDate, isLength } from '../inputValidationRules';

export const formConfig = {
    bookName: {
        ...createFormFieldConfig(
            'bookName',
            'md-4',
            data.prefix,
            'select',
            null,
            data.bookNames,
            true
        ),
        validationRules: [isRequired()],
    },
    recordNumber: {
        ...createFormFieldConfig(
            'recordNumber',
            'md-4',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 6 })],
    },
    recordDate: {
        ...createFormFieldConfig(
            'recordDate',
            'md-4',
            data.prefix,
            'input',
            'date',
            null,
            true
        ),
        validationRules: [
            isRequired(),
            isLength({ min: 1, max: 12 }),
            isDate(),
        ],
    },
    studentCondition: {
        ...createFormFieldConfig(
            'studentCondition',
            'md-4',
            data.prefix,
            'select',
            null,
            data.studentConditions,
            true
        ),
        validationRules: [isRequired()],
    },
    courseName: {
        ...createFormFieldConfig(
            'courseName',
            'md-4',
            data.prefix,
            'select',
            null,
            data.courseName,
            true
        ),
        validationRules: [isRequired()],
    },
    subjectName: {
        ...createFormFieldConfig(
            'subjectName',
            'md-4',
            data.prefix,
            'select',
            null,
            data.subjectName,
            true
        ),
        validationRules: [isRequired()],
    },
    isAnulled: {
        ...createFormFieldConfig(
            'isAnulled',
            'md-12',
            data.prefix,
            'input',
            'checkbox',
            null,
            false
        ),
        validationRules: [],
    },
};
