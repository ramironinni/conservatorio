import React from 'react';
import Input from '../../components/Forms/new/Input';
import Select from '../../components/Forms/new/Select';

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
    label,
    name,
    type,
    size,
    id,
    formField,
    options,
    defaultValue = ''
) {
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

const bookNames = ['B4', '...', '...', '...'];

export const signupForm = {
    bookName: {
        ...createFormFieldConfig(
            'Book Name',
            'bookName',
            'text',
            'md-4',
            'addRecord__bookName',
            'select',
            bookNames
        ),
        validationRules: [requiredRule('Book Name')],
    },
    recordNumber: {
        ...createFormFieldConfig(
            'Record Number',
            'recordNumber',
            'text',
            'md-4',
            'addRecord__recordNumber',
            'input'
        ),
        validationRules: [
            requiredRule('Record Number'),
            minLengthRule('Record Number', 8),
            maxLengthRule('Record Number', 20),
        ],
    },
};
