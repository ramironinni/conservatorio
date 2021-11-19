import AddContent from '../AddContent/AddContent';
import AddRecordForm from './AddRecordForm/AddRecordForm';
import useForm from '../../../hooks/useForm';
import { formConfig } from '../../../utils/forms/addRecord/formConfig';

const AddRecord = () => {
    const { renderFormFields, isFormValid, getFormValues } =
        useForm(formConfig);

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
