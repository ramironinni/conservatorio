import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';

const AddUserForm = ({ children, onSubmit, isFormValid }) => {
    return (
        <form className="needs-validation" onSubmit={onSubmit} noValidate>
            <div className="row g-3">
                <h4>Main</h4>
                {children}
            </div>
            <FormSubmitBtn isFormValid={isFormValid}>Add User</FormSubmitBtn>
        </form>
    );
};

export default AddUserForm;
