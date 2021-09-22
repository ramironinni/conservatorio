const FormInput = ({ type, id, placeholder, className, onChange }) => {
    return (
        <input
            type={type}
            className={`form-control ${className}`}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            required
        />
    );
};

export default FormInput;
