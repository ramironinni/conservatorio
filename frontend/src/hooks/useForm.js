import { useState, useCallback } from 'react';

function useForm(formObj) {
    const [form, setForm] = useState(formObj);

    function renderFormFields() {
        return Object.values(form).map((inputObj) => {
            const { value, label, errorMessage, valid, renderField } = inputObj;
            return renderField(
                onInputChange,
                value,
                valid,
                errorMessage,
                label,
                onBlur
            );
        });
    }

    const isInputFieldValid = useCallback(
        (inputField) => {
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

    const onBlur = useCallback(
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

    const onInputChange = useCallback(
        (event) => {
            const { name, value } = event.target;
            const inputObj = { ...form[name] };
            inputObj.value = value;

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

    const getFormValues = () => {
        return form;
    };

    return { renderFormFields, isFormValid, getFormValues };
}

export default useForm;
