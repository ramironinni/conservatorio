const FormSelect = ({ id, options }) => {
    return (
        <select className="form-select" id={`add-user__${id}`} required>
            <option value="">Choose...</option>
            {options.map((option, key) => {
                return <option key={key}>{option}</option>;
            })}
        </select>
    );
};

export default FormSelect;
