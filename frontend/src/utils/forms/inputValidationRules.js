import validator from 'validator';

function createValidationRule(errorMessage, validateFunc) {
    return {
        message: errorMessage,
        validate: validateFunc,
    };
}

export function isRequired() {
    return createValidationRule(
        `This field is required`,
        (inputValue, form) => inputValue.length !== 0
    );
}

export function isEmail() {
    return createValidationRule('Enter a valid email', (inputValue, form) =>
        validator.isEmail(inputValue)
    );
}

export function isDate() {
    return createValidationRule('Enter a valid date', (inputValue, form) =>
        validator.isDate(inputValue)
    );
}

export function isLength(config) {
    return createValidationRule(
        `It must contain between ${config.min} and ${config.max} characters`,
        (inputValue, form) => validator.isLength(inputValue, config)
    );
}

// export function passwordMatchRule() {
//     return createValidationRule(
//         `passwords do not match`,
//         (inputValue, form) => inputValue === form.password.value
//     );
// }
