import capitalizeWord from '../../../utils/capitalizeWord';

const FormCheck = ({ idPrefix, checked, onChange, role }) => {
    const id = idPrefix.concat(role);
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={id}
                name={role}
                value={role}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {capitalizeWord(role)}
            </label>
        </div>
    );
};

export default FormCheck;
