import getFieldNameFromId from '../../../utils/getFieldNameFromId';

const FormCheck = ({ id }) => {
    const fieldName = getFieldNameFromId(id);
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id={id} />
            <label className="form-check-label" htmlFor={id}>
                {fieldName}
            </label>
        </div>
    );
};

export default FormCheck;
