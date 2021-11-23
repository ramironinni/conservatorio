import { useState, useCallback } from 'react';

function useForm(formObj) {
    const [form, setForm] = useState(formObj);

    function renderFormFields() {
        return Object.values(form).map((inputObj) => {
            const { value, label, errorMessage, valid, renderField } = inputObj;

            return renderField(
                inputChangeHandler,
                inputBlurHandler,
                value,
                valid,
                errorMessage,
                label
            );
        });
    }

    const isInputFieldValid = useCallback(
        (inputField) => {
            if (inputField.validationRules.length === 0) {
                return true;
            }
            for (const rule of inputField.validationRules) {
                if (!rule.validate(inputField.value, form)) {
                    inputField.errorMessage = rule.message;
                    return false;
                }
            }

            return true;
        },
        [form]
    );

    const inputBlurHandler = useCallback(
        (e) => {
            const { name } = e.target;
            const inputObj = { ...form[name] };
            inputObj.touched = true;

            const isValidInput = isInputFieldValid(inputObj);
            if (isValidInput) {
                inputObj.valid = true;
            } else if (
                (!isValidInput && inputObj.valid) ||
                (!isValidInput && inputObj.touched)
            ) {
                inputObj.valid = false;
            }

            setForm({ ...form, [name]: inputObj });
        },
        [form, isInputFieldValid]
    );

    const inputChangeHandler = useCallback(
        (event) => {
            const { name, value, type, checked } = event.target;
            const inputObj = { ...form[name] };

            if (type === 'checkbox') {
                inputObj.checked = checked;
                inputObj.value = checked;
            } else {
                inputObj.value = value;
            }

            const isValidInput = isInputFieldValid(inputObj);
            if (isValidInput) {
                inputObj.valid = true;
            } else if (!isValidInput && inputObj.valid) {
                inputObj.valid = false;
            }
            inputObj.touched = true;

            setForm({ ...form, [name]: inputObj });
        },
        [form, isInputFieldValid]
    );

    /**
     * returns boolean value indicating whether overall form is valid
     *
     * @param {object} formObj - object representation of a form
     */
    const isFormValid = useCallback(() => {
        let isValid = true;
        const arr = Object.values(form);

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].valid) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }, [form]);

    return { renderFormFields, isFormValid };
}

export default useForm;
