import AddContent from '../AddContent/AddContent';
import AddRecordForm from './AddRecordForm/AddRecordForm';
import useForm from '../../../hooks/useForm';
import { formConfig } from '../../../utils/forms/addRecord/formConfig';

const AddRecord = () => {
    const { renderFormFields, isFormValid } = useForm(formConfig);

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log({
                bookName: e.target.bookName.value,
                recordNumber: e.target.recordNumber.value,
                recordDate: e.target.recordDate.value,
                studentCondition: e.target.studentCondition.value,
                courseName: e.target.courseName.value,
                subjectName: e.target.subjectName.value,
                isAnulled: e.target.isAnulled.checked,
            });
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
