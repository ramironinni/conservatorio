import FormCol from '../../../Forms/FormCol/FormCol';
import FormInput from '../../../Forms/FormCol/FormInput/FormInput';
import FormSelect from '../../../Forms/FormCol/FormSelect/FormSelect';
import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';

const AddRecordForm = () => {
    return (
        <form className="needs-validation">
            <div className="row g-3">
                <h4>Main</h4>

                <FormCol size="md-6" id="add-record__book-name">
                    <FormSelect
                        options={['B4', '...', '...', '...']}
                        id="add-record__book-name"
                    />
                </FormCol>

                <FormCol size="sm-6" id="add-record__record-number">
                    <FormInput type="text" id="add-record__record-number" />
                </FormCol>

                <FormCol size="md-6" id="add-record__student-condition">
                    <FormSelect
                        options={[
                            'regular',
                            'independent studies student',
                            'course equivalency',
                            'other',
                        ]}
                        id="add-record__student-condition"
                    />
                </FormCol>

                <FormCol size="sm-6" id="add-record__date">
                    <FormInput type="date" id="add-record__date" />
                </FormCol>

                <FormCol size="md-6" id="add-record__course-name">
                    <FormSelect
                        options={[
                            'Prof. en Música Orientación Instrumento',
                            'Prof. en Música Orientación Educación Musical',
                            'Tecnicatura en Capacitación Instrumental',
                            'Formación Básica para Jóvenes y Adultos',
                            'Formación Básica para Niños y Pre-adolescentes',
                        ]}
                        id="add-record__course-name"
                    />
                </FormCol>

                <FormCol size="md-6" id="add-record__subject-name">
                    <FormSelect
                        options={[
                            'Práctica Docente I',
                            'Didáctica',
                            'Historia de la Música III',
                        ]}
                        id="add-record__subject-name"
                    />
                </FormCol>
            </div>

            <hr className="my-4" />
            <h4>Notes</h4>
            <FormCheck id="add-record__subject-name" labelText="It's anulled" />

            <FormSubmitBtn element="record" />
        </form>
    );
};

export default AddRecordForm;
