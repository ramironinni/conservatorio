import capitalizeWord from '../../utils/capitalizeWord';

const Select = ({ id, classNames, value, onChange, options, required }) => {
    return (
        <select
            id={id}
            className={classNames}
            value={value}
            onChange={onChange}
            required={required}
        >
            <option value="">Choose...</option>
            {options.map((option, key) => {
                return (
                    <option value={option} key={key}>
                        {capitalizeWord(option)}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
