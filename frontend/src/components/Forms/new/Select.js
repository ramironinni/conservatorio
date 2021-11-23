import React from 'react';
import capitalizeWord from '../../../utils/capitalizeWord';

function Select({
    id,
    label,
    name,
    handleChange,
    handleBlur,
    errorMessage,
    isValid,
    value,
    size,
    options,
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
        <div className={classSize}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <select
                id={id}
                name={name}
                className={`form-select ${classIsValid}`}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                <option value="">Choose...</option>
                {options.map((option, key) => {
                    return (
                        <option value={option} key={key}>
                            {capitalizeWord(option)}
                        </option>
                    );
                })}
            </select>
            <div className="invalid-feedback">{errorMessage}</div>
        </div>
    );
}

export default React.memo(Select);
