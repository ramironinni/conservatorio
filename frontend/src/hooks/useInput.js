import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);

    const validationFeedback =
        !valueIsValid && !isTouched ? null : valueIsValid;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched('');
    };

    return {
        enteredValue,
        valueIsValid,
        validationFeedback,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
