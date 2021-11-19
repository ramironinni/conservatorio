import React from 'react';
import Input from '../../components/Forms/new/Input';

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
function createFormFieldConfig(label, name, type, size, id, defaultValue = '') {
    return {
        renderInput: (handleChange, value, isValid, error, key, handleBlur) => {
            return (
                <Input
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
        },
        label,
        value: defaultValue,
        valid: null,
        errorMessage: '',
        touched: false,
    };
}

export const signupForm = {
    bookName: {
        ...createFormFieldConfig(
            'Book Name',
            'bookName',
            'text',
            'md-4',
            'addRecord__bookName'
        ),
        validationRules: [requiredRule('Book Name')],
    },
    recordNumber: {
        ...createFormFieldConfig(
            'Record Number',
            'recordNumber',
            'text',
            'md-4',
            'addRecord__recordNumber'
        ),
        validationRules: [
            requiredRule('Record Number'),
            minLengthRule('Record Number', 8),
            maxLengthRule('Record Number', 20),
        ],
    },
};
