import React from 'react';
import Input from '../../components/Forms/new/Input';
import Select from '../../components/Forms/new/Select';
import camelCasedToText from '../camelCasedToText';

import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    passwordMatchRule,
} from './inputValidationRules';

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
function createFormFieldConfig(
    name,
    size,
    idPrefix,
    formField,
    type,
    options,
    defaultValue = ''
) {
    const label = camelCasedToText(name);

    const id = idPrefix.concat(name);

    let renderField;

    if (formField === 'input') {
        renderField = (
            handleChange,
            value,
            isValid,
            error,
            key,
            handleBlur
        ) => {
            return (
                <Input
                    id={id}
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errorMessage={error}
                    size={size}
                />
            );
        };
    }

    if (formField === 'select') {
        renderField = (
            handleChange,
            value,
            isValid,
            error,
            key,
            handleBlur
        ) => {
            return (
                <Select
                    id={id}
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errorMessage={error}
                    size={size}
                    options={options}
                />
            );
        };
    }

    return {
        renderField,
        label,
        value: defaultValue,
        valid: null,
        errorMessage: '',
        touched: false,
    };
}

const addRecord = {
    prefix: 'addRecord__',
    bookNames: ['B4', '...', '...', '...'],
    studentConditions: [
        'regular',
        'independent studies student',
        'course equivalency',
        'other',
    ],
    courseName: [
        'Prof. en Música Orientación Instrumento',
        'Prof. en Música Orientación Educación Musical',
        'Tecnicatura en Capacitación Instrumental',
        'Formación Básica para Jóvenes y Adultos',
        'Formación Básica para Niños y Pre-adolescentes',
    ],
    subjectName: [
        'Práctica Docente I',
        'Didáctica',
        'Historia de la Música III',
    ],
};

export const addRecordFormConfig = {
    bookName: {
        ...createFormFieldConfig(
            'bookName',
            'md-4',
            addRecord.prefix,
            'select',
            null,
            addRecord.bookNames
        ),
        validationRules: [requiredRule('Book Name')],
    },
    recordNumber: {
        ...createFormFieldConfig(
            'recordNumber',
            'md-4',
            addRecord.prefix,
            'input',
            'text',
            null
        ),
        validationRules: [
            requiredRule('Record Number'),
            minLengthRule('Record Number', 8),
            maxLengthRule('Record Number', 20),
        ],
    },
    recordDate: {
        ...createFormFieldConfig(
            'recordDate',
            'md-4',
            addRecord.prefix,
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
            addRecord.prefix,
            'select',
            null,
            addRecord.studentConditions
        ),
        validationRules: [requiredRule('Student Condition')],
    },
    courseName: {
        ...createFormFieldConfig(
            'courseName',
            'md-4',
            addRecord.prefix,
            'select',
            null,
            addRecord.studentConditions
        ),
        validationRules: [requiredRule('Course Name')],
    },
    subjectName: {
        ...createFormFieldConfig(
            'subjectName',
            'md-4',
            addRecord.prefix,
            'select',
            null,
            addRecord.subjectName
        ),
        validationRules: [requiredRule('Subject Name')],
    },
    // isAnulled: {
    // checkbox
    // },
};
