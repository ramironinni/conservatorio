import { createFormFieldConfig } from '../createFormFieldConfig';
import { data } from './data';

import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    passwordMatchRule,
} from '../inputValidationRules';

export const formConfig = {
    bookName: {
        ...createFormFieldConfig(
            'bookName',
            'md-4',
            data.prefix,
            'select',
            null,
            data.bookNames
        ),
        validationRules: [requiredRule('Book Name')],
    },
    recordNumber: {
        ...createFormFieldConfig(
            'recordNumber',
            'md-4',
            data.prefix,
            'input',
            'text',
            null
        ),
        validationRules: [
            requiredRule('Record Number'),
            minLengthRule('Record Number', 1),
            maxLengthRule('Record Number', 6),
        ],
    },
    recordDate: {
        ...createFormFieldConfig(
            'recordDate',
            'md-4',
            data.prefix,
            'input',
            'date',
            null
        ),
        validationRules: [
            requiredRule('Record Date'),
            minLengthRule('Record Date', 8),
            maxLengthRule('Record Date', 20),
        ],
    },
    studentCondition: {
        ...createFormFieldConfig(
            'studentCondition',
            'md-4',
            data.prefix,
            'select',
            null,
            data.studentConditions
        ),
        validationRules: [requiredRule('Student Condition')],
    },
    courseName: {
        ...createFormFieldConfig(
            'courseName',
            'md-4',
            data.prefix,
            'select',
            null,
            data.studentConditions
        ),
        validationRules: [requiredRule('Course Name')],
    },
    subjectName: {
        ...createFormFieldConfig(
            'subjectName',
            'md-4',
            data.prefix,
            'select',
            null,
            data.subjectName
        ),
        validationRules: [requiredRule('Subject Name')],
    },
    isAnulled: {
        ...createFormFieldConfig(
            'isAnulled',
            'md-12',
            data.prefix,
            'input',
            'checkbox',
            null
        ),
        validationRules: [],
    },
};
