import { createFormFieldConfig } from '../createFormFieldConfig';
import { data } from './data';

import { isRequired, isEmail } from '../inputValidationRules';

export const formConfig = {
    email: {
        ...createFormFieldConfig(
            'email',
            'md-12',
            'form-floating',
            data.prefix,
            'input',
            'text',
            null,
            true
        ),
        validationRules: [isRequired(), isEmail()],
    },
    password: {
        ...createFormFieldConfig(
            'password',
            'md-12',
            'form-floating',
            data.prefix,
            'input',
            'password',
            null,
            true
        ),
        validationRules: [isRequired()],
    },
    rememberMe: {
        ...createFormFieldConfig(
            'rememberMe',
            'md-12',
            'text-center',
            data.prefix,
            'input',
            'checkbox',
            null,
            false
        ),
        validationRules: [],
    },
};
