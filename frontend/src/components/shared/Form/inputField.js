import getFieldNameFromId from '../../../utils/getFieldNameFromId';
import getValidityClass from '../../../utils/getValidityClass';

const InputField = ({
    container,
    id,
    type,
    value,
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
            <input
                type={type}
                id={id}
                className={`form-control ${isValidClass}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={required}
            />
            <div className="invalid-feedback">
                {errorMesagge || `Valid ${fieldName} is required`}.
            </div>
        </div>
    );
};

export default InputField;
