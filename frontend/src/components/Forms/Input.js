import React, { useRef, useImperativeHandle } from 'react';

const Input = React.forwardRef(
    (
        {
            type,
            id,
            classNames,
            value,
            onChange,
            onBlur,
            isValid,
            placeholder,
            required,
        },
        ref
    ) => {
        const classIsValid =
            isValid === false
                ? 'is-invalid'
                : isValid === true
                ? 'is-valid'
                : '';

        const inputRef = useRef();

        const activate = () => {
            inputRef.current.focus();
        };

        useImperativeHandle(ref, () => {
            return {
                focus: activate,
            };
        });

        return (
            <input
                ref={inputRef}
                type={type}
                id={id}
                className={`form-control ${classNames} ${classIsValid}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                required={required}
            />
        );
    }
);

export default Input;
