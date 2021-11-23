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
            data.bookNames,
            true
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
            null,
            true
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
            null,
            true
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
            data.studentConditions,
            true
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
            data.courseName,
            true
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
            data.subjectName,
            true
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
            null,
            false
        ),
        validationRules: [],
    },
};
