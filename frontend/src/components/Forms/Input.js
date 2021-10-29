const Input = ({
    type,
    id,
    classNames,
    value,
    onChange,
    placeholder,
    required,
}) => {
    return (
        <input
            type={type}
            id={id}
            className={`form-control ${classNames}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    );
};

export default Input;
