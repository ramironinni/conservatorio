import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';

const AddRecordForm = ({ children, onSubmit, isFormValid }) => {
    return (
        <form className="needs-validation" onSubmit={onSubmit}>
            <div className="row g-3">
                <h4>Main</h4>
                {children}
            </div>
            <FormSubmitBtn isFormValid={isFormValid}>Add record</FormSubmitBtn>
        </form>
    );
};

export default AddRecordForm;
