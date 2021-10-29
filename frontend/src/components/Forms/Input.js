const Input = (type, id, classNames, value, onChange, required) => {
    return (
        <input
            type={type}
            id={id}
            className={`form-control ${classNames}`}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default Input;
