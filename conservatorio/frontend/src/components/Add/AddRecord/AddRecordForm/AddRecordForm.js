import FormInput from '../../../Forms/FormInput/FormInput';
import FormSelect from '../../../Forms/FormSelect/FormSelect';
import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';
import { useState } from 'react';

const AddRecordForm = () => {
    const [bookName, setBookName] = useState('');
    const [recordNumber, setRecordNumber] = useState('');
    const [recordDate, setRecordDate] = useState('');
    const [studentCondition, setStudentCondition] = useState('');
    const [courseName, setCourseName] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [isAnulled, setIsAnulled] = useState(false);

    const bookNameChangeHandler = (e) => {
        setBookName(e.target.value);
    };

    const recordNumberChangeHandler = (e) => {
        setRecordNumber(e.target.value);
    };

    const recordDateChangeHandler = (e) => {
        setRecordDate(e.target.value);
    };

    const studentConditionChangeHandler = (e) => {
        setStudentCondition(e.target.value);
    };

    const courseNameChangeHandler = (e) => {
        setCourseName(e.target.value);
    };

    const subjectNameChangeHandler = (e) => {
        setSubjectName(e.target.value);
    };

    const isAnulledChangeHandler = () => {
        setIsAnulled(!isAnulled);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newRecord = {
            bookName,
            recordNumber,
            recordDate,
            studentCondition,
            courseName,
            subjectName,
            isAnulled,
        };

        console.log(newRecord);
    };

    return (
        <form className="needs-validation" onSubmit={submitHandler}>
            <div className="row g-3">
                <h4>Main</h4>

                <FormSelect
                    size="lg-4"
                    options={['B4', '...', '...', '...']}
                    id="add-record__book-name"
                    value={bookName}
                    onChange={bookNameChangeHandler}
                    required
                />

                <FormInput
                    size="lg-4"
                    type="text"
                    id="add-record__record-number"
                    value={recordNumber}
                    onChange={recordNumberChangeHandler}
                    required
                />

                <FormInput
                    size="lg-4"
                    type="date"
                    id="add-record__date"
                    value={recordDate}
                    onChange={recordDateChangeHandler}
                    required
                />

                <FormSelect
                    size="12"
                    options={[
                        'regular',
                        'independent studies student',
                        'course equivalency',
                        'other',
                    ]}
                    id="add-record__student-condition"
                    value={studentCondition}
                    onChange={studentConditionChangeHandler}
                    required
                />

                <FormSelect
                    size="12"
                    options={[
                        'Prof. en Música Orientación Instrumento',
                        'Prof. en Música Orientación Educación Musical',
                        'Tecnicatura en Capacitación Instrumental',
                        'Formación Básica para Jóvenes y Adultos',
                        'Formación Básica para Niños y Pre-adolescentes',
                    ]}
                    id="add-record__course-name"
                    value={courseName}
                    onChange={courseNameChangeHandler}
                    required
                />

                <FormSelect
                    size="12"
                    options={[
                        'Práctica Docente I',
                        'Didáctica',
                        'Historia de la Música III',
                    ]}
                    id="add-record__subject-name"
                    value={subjectName}
                    onChange={subjectNameChangeHandler}
                    required
                />
            </div>

            <hr className="my-4" />
            <h4>Notes</h4>
            <FormCheck
                id="add-record__anulled"
                checked={isAnulled}
                onChange={isAnulledChangeHandler}
            />

            <FormSubmitBtn element="record" />
        </form>
    );
};

export default AddRecordForm;
