const FormInput = ({ type, id, placeholder, className }) => {
    return (
        <input
            type={type}
            className={`form-control ${className}`}
            id={`add-user__${id}`}
            placeholder={placeholder}
            value=""
            required
        />
    );
};

export default FormInput;
