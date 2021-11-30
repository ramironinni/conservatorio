import React from 'react';

function Checkbox({
    id,
    label,
    type,
    name,
    handleChange,
    handleBlur,
    errorMessage,
    isValid,
    checked,
    size,
    classNames,
    isRequired,
}) {
    let classIsValid = '';

    if (isRequired) {
        classIsValid =
            isValid === false
                ? 'is-invalid'
                : isValid === true
                ? 'is-valid'
                : '';
    }

    const classSize = `col-${size}`;

    return (
        <div className={`form-check ${classSize}  ${classNames && classNames}`}>
            <input
                type={type}
                id={id}
                name={name}
                checked={checked}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-check-input ${classIsValid}`}
            />
            <label htmlFor={id} className="form-check-label">
                {label}
            </label>
            <div className="invalid-feedback">{errorMessage}</div>
        </div>
    );
}

export default React.memo(Checkbox);
