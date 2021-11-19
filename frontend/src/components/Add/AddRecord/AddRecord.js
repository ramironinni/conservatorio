import AddContent from '../AddContent/AddContent';
import AddRecordForm from './AddRecordForm/AddRecordForm';
import { signupForm } from '../../../utils/forms/formConfig';
import useForm from '../../../hooks/useForm';

const AddRecord = () => {
    const { renderFormFields, isFormValid, getFormValues } =
        useForm(signupForm);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid) {
            const values = getFormValues();
            console.log(values);
        }
    };

    return (
        <div className="container add-record-container">
            <AddContent element="record">
                <AddRecordForm
                    onSubmit={submitHandler}
                    isFormValid={isFormValid()}
                >
                    {renderFormFields()}
                </AddRecordForm>
            </AddContent>
        </div>
    );
};

export default AddRecord;
