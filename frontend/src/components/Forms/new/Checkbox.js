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
    value,
    size,
}) {
    const classIsValid =
        isValid === false ? 'is-invalid' : isValid === true ? 'is-valid' : '';

    const classSize = `col-${size}`;

    return (
        <div className={`form-check ${classSize}`}>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
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
