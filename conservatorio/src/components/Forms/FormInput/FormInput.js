import getFieldNameFromId from '../../../utils/getFieldNameFromId';

const FormInput = ({ size, id, type, value, onChange }) => {
    const fieldName = getFieldNameFromId(id);
    const className = `col-${size}`;

    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            <input
                type={type}
                className={`form-control ${className}`}
                id={id}
                value={value}
                onChange={onChange}
                required
            />
            <div className="invalid-feedback">
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormInput;
