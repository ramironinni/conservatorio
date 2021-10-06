import getFieldNameFromId from '../../../utils/getFieldNameFromId';

const FormInput = ({ size, id, type, value, onChange, required }) => {
    const fieldName = getFieldNameFromId(id);
    const classSize = `col-${size}`;

    return (
        <div className={classSize}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            <input
                type={type}
                className={`form-control ${classSize}`}
                id={id}
                value={value}
                onChange={onChange}
                required={required}
            />
            <div className="invalid-feedback">
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormInput;
