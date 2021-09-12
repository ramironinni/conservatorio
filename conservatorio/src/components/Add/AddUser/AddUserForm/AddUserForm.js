import capitalizeWord from '../../../../utils/capitalizeWord';
import FormCol from '../../../Forms/FormCol/FormCol';
import FormInput from '../../../Forms/FormCol/FormInput/FormInput';
import FormSelect from '../../../Forms/FormCol/FormSelect/FormSelect';
import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from './FormCol/FormCheck/FormCheck';

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

    return (
        <form className="needs-validation">
            <div className="row g-3">
                <h4>Main</h4>

                <FormCol size="sm-6" id="add-user__first-name">
                    <FormInput type="text" id="add-user__first-name" />
                </FormCol>
                <FormCol size="sm-6" id="add-user__last-name">
                    <FormInput type="text" id="add-user__last-name" />
                </FormCol>
                <FormCol size="sm-6" id="add-user__id-number">
                    <FormInput type="text" id="add-user__id-number" />
                </FormCol>
                <FormCol size="sm-6" id="add-user__date-of-birth">
                    <FormInput type="date" id="add-user__date-of-birth" />
                </FormCol>
                <FormCol size="sm-6" id="add-user__gender">
                    <FormSelect
                        options={['female', 'male', 'non-binary', 'other']}
                        id="add-user__gender"
                    />
                </FormCol>
                <FormCol size="sm-6" id="add-user__nationality">
                    <FormSelect
                        options={['Argentinian', '...', '...', '...']}
                        id="add-user__nationality"
                    />
                </FormCol>

                <h4 className="mt-5">Address</h4>

                <FormCol size="md-12" id="add-user__street-name">
                    <FormInput type="text" id="add-user__street-name" />
                </FormCol>
                <FormCol size="md-4" id="add-user__house-number">
                    <FormInput type="number" id="add-user__house-number" />
                </FormCol>
                <FormCol size="md-4" id="add-user__floor">
                    <FormInput type="text" id="add-user__floor" />
                </FormCol>
                <FormCol size="md-4" id="add-user__apartment">
                    <FormInput type="text" id="add-user__apartment" />
                </FormCol>
                <FormCol size="md-6" id="add-user__city">
                    <FormInput type="text" id="add-user__city" />
                </FormCol>
                <FormCol size="md-6" id="add-user__state">
                    <FormSelect
                        options={['Buenos Aires', '...', '...', '...']}
                        id="add-user__state"
                    />
                </FormCol>

                <h4 className="mt-5">Contact</h4>

                <FormCol size="md-12" id="add-user__email">
                    <FormInput type="email" id="add-user__email" />
                </FormCol>
                <FormCol size="md-3" id="add-user__phone-1-code-area">
                    <FormInput type="email" id="add-user__phone-1-code-area" />
                </FormCol>
                <FormCol size="md-9" id="add-user__phone-1-number">
                    <FormInput type="number" id="add-user__phone-1-number" />
                </FormCol>
                <FormCol size="md-3" id="add-user__phone-2-code-area">
                    <FormInput type="email" id="add-user__phone-2-code-area" />
                </FormCol>
                <FormCol size="md-9" id="add-user__phone-2-number">
                    <FormInput type="number" id="add-user__phone-2-number" />
                </FormCol>
                <FormCol size="md-12" id="add-user__profile-photo">
                    <FormInput
                        type="file"
                        className="form-control"
                        id="add-user__profile-photo"
                    />
                </FormCol>
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
