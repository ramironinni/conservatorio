import FormInput from '../../../Forms/FormInput/FormInput';
import FormSelect from '../../../Forms/FormSelect/FormSelect';
import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';
import capitalizeWord from '../../../../utils/capitalizeWord';
import { useState } from 'react';

const AddUserForm = () => {
    const roles = [
        'student',
        'professor',
        'preceptor',
        'principal',
        'janitor',
        'librarian',
        'other',
    ];

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    };

    const idNumberChangeHandler = (e) => {
        setIdNumber(e.target.value);
    };

    const dateOfBirthChangeHandler = (e) => {
        setDateOfBirth(e.target.value);
    };

    return (
        <form className="needs-validation">
            <div className="row g-3">
                <h4>Main</h4>

                <FormInput
                    size="sm-6"
                    id="add-user__first-name"
                    type="text"
                    onChange={firstNameChangeHandler}
                    value={firstName}
                />
                <FormInput
                    size="sm-6"
                    id="add-user__last-name"
                    type="text"
                    onChange={lastNameChangeHandler}
                    value={lastName}
                />
                <FormInput
                    size="sm-6"
                    id="add-user__id-number"
                    type="text"
                    onChange={dateOfBirthChangeHandler}
                    value={dateOfBirth}
                />
                <FormInput
                    size="sm-6"
                    id="add-user__date-of-birth"
                    type="date"
                    onChange={idNumberChangeHandler}
                    value={idNumber}
                />
                <FormSelect
                    size="sm-6"
                    options={['female', 'male', 'non-binary', 'other']}
                    id="add-user__gender"
                />
                <FormSelect
                    size="sm-6"
                    options={['Argentinian', '...', '...', '...']}
                    id="add-user__nationality"
                />

                <h4 className="mt-5">Address</h4>

                <FormInput
                    size="md-12"
                    id="add-user__street-name"
                    type="text"
                />
                <FormInput
                    size="md-4"
                    id="add-user__house-number"
                    type="number"
                />
                <FormInput size="md-4" id="add-user__floor" type="text" />
                <FormInput size="md-4" id="add-user__apartment" type="text" />
                <FormInput size="md-6" id="add-user__city" type="text" />
                <FormSelect
                    size="md-6"
                    options={['Buenos Aires', '...', '...', '...']}
                    id="add-user__state"
                />

                <h4 className="mt-5">Contact</h4>

                <FormInput size="md-12" id="add-user__email" type="email" />
                <FormInput
                    size="md-3"
                    id="add-user__phone-1-code-area"
                    type="email"
                />
                <FormInput
                    size="md-9"
                    id="add-user__phone-1-number"
                    type="number"
                />
                <FormInput
                    size="md-3"
                    id="add-user__phone-2-code-area"
                    type="email"
                />
                <FormInput
                    size="md-9"
                    id="add-user__phone-2-number"
                    type="number"
                />
                <FormInput
                    size="md-12"
                    id="add-user__profile-photo"
                    type="file"
                    className="form-control"
                />
            </div>

            <hr className="my-4" />
            <h4>Roles</h4>

            <div>
                {roles.map((role, key) => {
                    const id = 'is'.concat(capitalizeWord(role));
                    return (
                        <FormCheck
                            key={key}
                            id={id}
                            labelText={role.toLowerCase()}
                        />
                    );
                })}
            </div>
            <FormSubmitBtn element="user" />
        </form>
    );
};

export default AddUserForm;
