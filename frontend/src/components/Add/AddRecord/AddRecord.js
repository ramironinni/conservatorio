import AddContent from '../AddContent/AddContent';
import AddRecordForm from './AddRecordForm/AddRecordForm';

const AddRecord = () => {
    return (
        <div className="container add-record-container">
            <AddContent element="record">
                <AddRecordForm />
            </AddContent>
        </div>
    );
};

export default AddRecord;
