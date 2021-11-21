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
    defaultValue = ''
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
                    value={value}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errorMessage={error}
                    size={size}
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
                />
            );
        }
    };

    return {
        renderField,
        label,
        value: defaultValue,
        valid: null,
        errorMessage: '',
        touched: false,
    };
};
