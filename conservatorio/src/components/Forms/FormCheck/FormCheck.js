import capitalizeWord from '../../../../utils/capitalizeWord';

const FormCheck = ({ id, labelText, className }) => {
    const completeId = `add-user__${id}`;
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id={completeId}
            />
            <label className="form-check-label" htmlFor={completeId}>
                {capitalizeWord(labelText)}
            </label>
        </div>
    );
};

export default FormCheck;
