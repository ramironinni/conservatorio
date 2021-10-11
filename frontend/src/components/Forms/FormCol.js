import capitalizeWord from '../../utils/capitalizeWord';
import getFieldNameFromId from '../../utils/getFieldNameFromId';

const FormCol = ({ size, id, type, value, onChange, options, required }) => {
    const fieldName = getFieldNameFromId(id);
    const classSize = `col-${size}`;

    const element = type ? (
        <input
            type={type}
            id={id}
            className={`form-control ${classSize}`}
            value={value}
            onChange={onChange}
            required={required}
        />
    ) : (
        <select
            id={id}
            className="form-select"
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
    );

    return (
        <div className={classSize}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            {element}
            <div className="invalid-feedback">
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormCol;
