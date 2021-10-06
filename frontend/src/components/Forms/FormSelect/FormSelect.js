import capitalizeWord from '../../../utils/capitalizeWord';
import getFieldNameFromId from '../../../utils/getFieldNameFromId';

const FormSelect = ({ size, id, options, value, onChange, required }) => {
    const fieldName = getFieldNameFromId(id);

    const sizeClass = `col-${size}`;

    return (
        <div className={sizeClass}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            <select
                className="form-select"
                id={id}
                value={value}
                onChange={onChange}
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
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormSelect;
