import React from 'react';

function InputField(props) {
    const {
        label,
        type,
        name,
        handleChange,
        handleBlur,
        errorMessage,
        isValid,
        value,
        classNames,
    } = props;

    const classIsValid =
        isValid === false ? 'is-invalid' : isValid === true ? 'is-valid' : '';

    return (
        <div className="inputContainer">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${classNames} ${classIsValid}`}
            />
            {errorMessage && !isValid && (
                <span className="error">{errorMessage}</span>
            )}
        </div>
    );
}

export default React.memo(InputField);
