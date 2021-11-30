import React from 'react';

function Input({
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

    const labelField = (
        <label htmlFor={id} className="form-label">
            {label}
        </label>
    );

    return (
        <div className={`${classSize} ${classNames && classNames}`}>
            {classNames !== 'form-floating' ? labelField : ''}
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${classIsValid}`}
            />
            {classNames === 'form-floating' ? labelField : ''}
            <div className="invalid-feedback">{errorMessage}</div>
        </div>
    );
}

export default React.memo(Input);
