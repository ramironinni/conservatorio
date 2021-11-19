import React from 'react';

function Input(props) {
    const {
        label,
        type,
        name,
        handleChange,
        handleBlur,
        errorMessage,
        isValid,
        value,
        size,
        id,
        classNames,
    } = props;

    const classIsValid =
        isValid === false ? 'is-invalid' : isValid === true ? 'is-valid' : '';

    const classSize = `col-${size}`;

    return (
        <div className={classSize}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${classNames} ${classIsValid}`}
            />
            <div className="invalid-feedback">{errorMessage}</div>
        </div>
    );
}

export default React.memo(Input);
