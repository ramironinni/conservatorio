import Checkbox from '../../components/Forms/new/Checkbox';
import Input from '../../components/Forms/new/Input';
import Select from '../../components/Forms/new/Select';
import camelCasedToText from '../camelCasedToText';

export const createFormFieldConfig = (
    name,
    size,
    idPrefix,
    formField,
    type,
    options,
    isRequired,
    value = ''
) => {
    const label = camelCasedToText(name);

    const id = idPrefix.concat(name);

    let renderField;

    renderField = (handleChange, handleBlur, value, isValid, error, key) => {
        if (formField === 'input' && type === 'checkbox') {
            return (
                <Checkbox
                    id={id}
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    checked={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errorMessage={error}
                    size={size}
                    isRequired={isRequired}
                />
            );
        }
        if (formField === 'input') {
            return (
                <Input
                    id={id}
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errorMessage={error}
                    size={size}
                    isRequired={isRequired}
                />
            );
        }

        if (formField === 'select') {
            return (
                <Select
                    id={id}
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errorMessage={error}
                    size={size}
                    options={options}
                    isRequired={isRequired}
                />
            );
        }
    };

    return {
        renderField,
        label,
        value,
        valid: isRequired ? null : true,
        isRequired,
        errorMessage: '',
        touched: false,
    };
};
