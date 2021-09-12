const FormInput = ({ type, id, placeholder, className }) => {
    return (
        <input
            type={type}
            className={`form-control ${className}`}
            id={id}
            placeholder={placeholder}
            value=""
            required
        />
    );
};

export default FormInput;
