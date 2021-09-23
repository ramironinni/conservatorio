import FormInput from '../../../Forms/FormInput/FormInput';
import FormSelect from '../../../Forms/FormSelect/FormSelect';
import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';

const AddRecordForm = () => {
    return (
        <form className="needs-validation">
            <div className="row g-3">
                <h4>Main</h4>

                <FormSelect
                    size="md-6"
                    options={['B4', '...', '...', '...']}
                    id="add-record__book-name"
                />

                <FormInput
                    size="sm-6"
                    type="text"
                    id="add-record__record-number"
                />

                <FormSelect
                    size="md-6"
                    options={[
                        'regular',
                        'independent studies student',
                        'course equivalency',
                        'other',
                    ]}
                    id="add-record__student-condition"
                />

                <FormInput size="sm-6" type="date" id="add-record__date" />

                <FormSelect
                    size="md-6"
                    options={[
                        'Prof. en Música Orientación Instrumento',
                        'Prof. en Música Orientación Educación Musical',
                        'Tecnicatura en Capacitación Instrumental',
                        'Formación Básica para Jóvenes y Adultos',
                        'Formación Básica para Niños y Pre-adolescentes',
                    ]}
                    id="add-record__course-name"
                />

                <FormSelect
                    size="md-6"
                    options={[
                        'Práctica Docente I',
                        'Didáctica',
                        'Historia de la Música III',
                    ]}
                    id="add-record__subject-name"
                />
            </div>

            <hr className="my-4" />
            <h4>Notes</h4>
            <FormCheck id="add-record__anulled" />

            <FormSubmitBtn element="record" />
        </form>
    );
};

export default AddRecordForm;
