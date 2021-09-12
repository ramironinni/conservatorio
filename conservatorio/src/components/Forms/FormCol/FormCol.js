import capitalizeWord from '../../../utils/capitalizeWord';

const FormCol = ({ size, id, children }) => {
    const idToArray = id.split('');
    const index = idToArray.lastIndexOf('_') + 1;
    const cleanedId = idToArray.slice(index).join('');

    const array = cleanedId.split('-').map((word) => {
        return capitalizeWord(word);
    });

    const fieldName = array.reduce((accum, curr) => {
        return accum + ' ' + curr;
    }, '');

    const className = `col-${size}`;

    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">
                {fieldName}
            </label>
            {children}
            <div className="invalid-feedback">
                Valid {fieldName} is required.
            </div>
        </div>
    );
};

export default FormCol;
