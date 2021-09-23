import getFieldNameFromId from '../../../utils/getFieldNameFromId';

const FormSelect = ({ size, id, options }) => {
    const fieldName = getFieldNameFromId(id);

    const className = `col-${size}`;

    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            <select className="form-select" id={`add-user__${id}`} required>
                <option value="">Choose...</option>
                {options.map((option, key) => {
                    return <option key={key}>{option}</option>;
                })}
            </select>
            <div className="invalid-feedback">
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormSelect;
