import getFieldNameFromId from '../../../utils/getFieldNameFromId';

const FormCheck = ({ id, checked, onChange }) => {
    const fieldName = getFieldNameFromId(id);
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={id}
                name={fieldName}
                value={fieldName}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {fieldName}
            </label>
        </div>
    );
};

export default FormCheck;
