import capitalizeWord from '../../../utils/capitalizeWord';
import getFieldNameFromId from '../../../utils/getFieldNameFromId';
import getValidityClass from '../../../utils/getValidityClass';

const SelectField = ({
    container,
    id,
    value,
    options,
    onChange,
    onBlur,
    errorMesagge,
    isValid,
    required,
}) => {
    const fieldName = getFieldNameFromId(id);
    const isValidClass = getValidityClass(isValid);

    return (
        <div className={container}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            <select
                id={id}
                className={`form-select ${isValidClass}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                options={options}
                required={required}
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
            <div className="invalid-feedback">
                {errorMesagge || `Valid ${fieldName} is required`}.
            </div>
        </div>
    );
};

export default SelectField;
