import capitalizeWord from '../../../utils/capitalizeWord';
import FormCheck from './FormCol/FormCheck/FormCheck';
import FormCol from './FormCol/FormCol';
import FormInput from './FormCol/FormInput/FormInput';
import FormSelect from './FormCol/FormSelect/FormSelect';

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
                <FormCol size="sm-6" id="first-name">
                    <FormInput type="text" id="first-name" />
                </FormCol>
                <FormCol size="sm-6" id="last-name">
                    <FormInput type="text" id="last-name" />
                </FormCol>
                <FormCol size="sm-6" id="id-number">
                    <FormInput type="text" id="id-number" />
                </FormCol>
                <FormCol size="sm-6" id="date-of-birth">
                    <FormInput type="date" id="date-of-birth" />
                </FormCol>
                <FormCol size="sm-6" id="gender">
                    <FormSelect
                        options={['female', 'male', 'non-binary', 'other']}
                    />
                </FormCol>
                <FormCol size="sm-6" id="nationality">
                    <FormSelect
                        options={['Argentinian', '...', '...', '...']}
                        id="nationality"
                    />
                </FormCol>

                <h4 className="mt-5">Address</h4>

                <FormCol size="md-12" id="street-name">
                    <FormInput type="text" id="street-name" />
                </FormCol>
                <FormCol size="md-4" id="house-number">
                    <FormInput type="number" id="house-number" />
                </FormCol>
                <FormCol size="md-4" id="floor">
                    <FormInput type="text" id="floor" />
                </FormCol>
                <FormCol size="md-4" id="apartment">
                    <FormInput type="text" id="apartment" />
                </FormCol>
                <FormCol size="md-6" id="city">
                    <FormInput type="text" id="city" />
                </FormCol>
                <FormCol size="md-6" id="state">
                    <FormSelect
                        options={['Buenos Aires', '...', '...', '...']}
                        id="state"
                    />
                </FormCol>

                <h4 className="mt-5">Contact</h4>

                <FormCol size="md-12" id="email">
                    <FormInput type="email" id="email" />
                </FormCol>
                <FormCol size="md-3" id="phone-1-code-area">
                    <FormInput type="email" id="phone-1-code-area" />
                </FormCol>
                <FormCol size="md-9" id="phone-1-number">
                    <FormInput type="number" id="phone-1-number" />
                </FormCol>
                <FormCol size="md-3" id="phone-2-code-area">
                    <FormInput type="email" id="phone-2-code-area" />
                </FormCol>
                <FormCol size="md-9" id="phone-2-number">
                    <FormInput type="number" id="phone-2-number" />
                </FormCol>
                <FormCol size="md-12" id="profile-photo">
                    <FormInput
                        type="file"
                        className="form-control"
                        id="profile-photo"
                    />
                </FormCol>
            </div>

            <hr className="my-4" />
            <h4>Roles</h4>

            <div className="row g-1">
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

            <button className="w-100 btn btn-success btn-lg mt-5" type="submit">
                Add user
            </button>
        </form>
    );
};

export default AddUserForm;
