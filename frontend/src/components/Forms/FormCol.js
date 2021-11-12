import getFieldNameFromId from '../../utils/getFieldNameFromId';
import Input from './Input';
import Select from './Select';

const FormCol = ({
    size,
    id,
    type,
    value,
    onChange,
    onBlur,
    isValid,
    options,
    required,
}) => {
    const fieldName = getFieldNameFromId(id);
    const classSize = `col-${size}`;
    const element = type ? (
        <Input
            type={type}
            id={id}
            classNames={`form-control ${classSize}`}
            isValid={isValid}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
        />
    ) : (
        <Select
            id={id}
            classNames={'form-select'}
            value={value}
            onChange={onChange}
            options={options}
            required={required}
        />
    );

    return (
        <div className={classSize}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            {element}
            <div className="invalid-feedback">
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormCol;
