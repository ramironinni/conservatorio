import { createFormFieldConfig } from '../createFormFieldConfig';
import { data } from './data';

import { isRequired, isDate, isLength } from '../inputValidationRules';
import capitalizeWord from '../../capitalizeWord';

const rolesCheckboxObj = {};
data.roles.forEach((role) => {
    rolesCheckboxObj[`is${capitalizeWord(role.name)}`] = {
        ...createFormFieldConfig(
            `is${capitalizeWord(role.name)}`,
            'md-12',
            data.prefix,
            'input',
            'checkbox',
            null,
            false
        ),
        validationRules: [],
    };
});

export const formConfig = {
    firstName: {
        ...createFormFieldConfig(
            'firstName',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 60 })],
    },
    lastName: {
        ...createFormFieldConfig(
            'lastName',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 60 })],
    },
    idNumber: {
        ...createFormFieldConfig(
            'idNumber',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 20 })],
    },
    dateOfBirth: {
        ...createFormFieldConfig(
            'dateOfBirth',
            'md-6',
            data.prefix,
            'input',
            'date',
            null,
            true
        ),
        validationRules: [isRequired(), isDate()],
    },
    gender: {
        ...createFormFieldConfig(
            'gender',
            'md-6',
            data.prefix,
            'select',
            null,
            data.genders,
            true
        ),
        validationRules: [isRequired()],
    },
    nationality: {
        ...createFormFieldConfig(
            'nationality',
            'md-6',
            data.prefix,
            'select',
            null,
            data.nationalities,
            true
        ),
        validationRules: [isRequired()],
    },
    streetName: {
        ...createFormFieldConfig(
            'streetName',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 40 })],
    },
    houseNumber: {
        ...createFormFieldConfig(
            'houseNumber',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 8 })],
    },
    floor: {
        ...createFormFieldConfig(
            'floor',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            false
        ),
        validationRules: [isLength({ min: 0, max: 15 })],
    },
    apartment: {
        ...createFormFieldConfig(
            'apartment',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            false
        ),
        validationRules: [isLength({ min: 0, max: 15 })],
    },
    city: {
        ...createFormFieldConfig(
            'city',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 50 })],
    },
    state: {
        ...createFormFieldConfig(
            'state',
            'md-6',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 50 })],
    },
    phone1CodeArea: {
        ...createFormFieldConfig(
            'phone1CodeArea',
            'md-3',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 15 })],
    },
    phone1Number: {
        ...createFormFieldConfig(
            'phone1Number',
            'md-9',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isLength({ min: 1, max: 15 })],
    },
    phone2CodeArea: {
        ...createFormFieldConfig(
            'phone2CodeArea',
            'md-3',
            data.prefix,
            'input',
            'text',
            null,
            false
        ),
        validationRules: [isLength({ min: 0, max: 15 })],
    },
    phone2Number: {
        ...createFormFieldConfig(
            'phone2Number',
            'md-9',
            data.prefix,
            'input',
            'text',
            null,
            false
        ),
        validationRules: [isLength({ min: 0, max: 15 })],
    },
    profilePhoto: {
        ...createFormFieldConfig(
            'profilePhoto',
            'md-9',
            data.prefix,
            'input',
            'file',
            null,
            false
        ),
        validationRules: [],
    },
    ...rolesCheckboxObj,
};
