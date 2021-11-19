import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';
import { useState } from 'react';
import FormCol from '../../../Forms/FormCol';

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
