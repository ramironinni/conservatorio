import capitalizeWord from '../../../utils/capitalizeWord';

const FormCheck = ({ idPrefix, checked, onChange, label }) => {
    const id = idPrefix.concat(label);
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={id}
                name={label}
                value={label}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {capitalizeWord(label)}
            </label>
        </div>
    );
};

export default FormCheck;
