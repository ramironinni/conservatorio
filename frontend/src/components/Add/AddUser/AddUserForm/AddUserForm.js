import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';
import { useState } from 'react';
import roles from '../../../../utils/roles';
import FormCol from '../../../Forms/FormCol';

const AddUserForm = ({ onGetNewUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [streetName, setStreetName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [floor, setFloor] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [phone1CodeArea, setPhone1CodeArea] = useState('');
    const [phone1Number, setPhone1Number] = useState('');
    const [phone2CodeArea, setPhone2CodeArea] = useState('');
    const [phone2Number, setPhone2Number] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [selectedRoles, setAssignedRoles] = useState(
        new Array(roles.length).fill(false)
    );

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

    const genderChangeHandler = (e) => {
        setGender(e.target.value);
    };

    const nationalityChangeHandler = (e) => {
        setNationality(e.target.value);
    };

    const streetNameChangeHandler = (e) => {
        setStreetName(e.target.value);
    };

    const houseNumberChangeHandler = (e) => {
        setHouseNumber(e.target.value);
    };

    const floorChangeHandler = (e) => {
        setFloor(e.target.value);
    };

    const apartmentChangeHandler = (e) => {
        setApartment(e.target.value);
    };

    const cityChangeHandler = (e) => {
        setCity(e.target.value);
    };

    const stateChangeHandler = (e) => {
        setState(e.target.value);
    };

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const phone1CodeAreaChangeHandler = (e) => {
        setPhone1CodeArea(e.target.value);
    };

    const phone1NumberChangeHandler = (e) => {
        setPhone1Number(e.target.value);
    };

    const phone2CodeAreaChangeHandler = (e) => {
        setPhone2CodeArea(e.target.value);
    };

    const phone2NumberChangeHandler = (e) => {
        setPhone2Number(e.target.value);
    };

    const profilePhotoChangeHandler = (e) => {
        setProfilePhoto(e.target.value);
    };

    const assignedRolesChangeHandler = (position) => {
        const updatedCheckedState = selectedRoles.map((item, index) =>
            index === position ? !item : item
        );

        setAssignedRoles(updatedCheckedState);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const assignedRoles = selectedRoles.reduce((acc, cur, i) => {
            if (cur) {
                acc.push(roles[i]);
            }
            return acc;
        }, []);

        const newUser = {
            firstName,
            lastName,
            idNumber,
            dateOfBirth,
            gender,
            nationality,
            streetName,
            houseNumber,
            floor,
            apartment,
            city,
            state,
            email,
            phone1CodeArea,
            phone1Number,
            phone2CodeArea,
            phone2Number,
            assignedRoles,
        };

        onGetNewUser(newUser);

        setFirstName('');
        setLastName('');
        setIdNumber('');
        setDateOfBirth('');
        setGender('');
        setNationality('');
        setStreetName('');
        setHouseNumber('');
        setFloor('');
        setApartment('');
        setCity('');
        setState('');
        setEmail('');
        setPhone1CodeArea('');
        setPhone1Number('');
        setPhone2CodeArea('');
        setPhone2Number('');
        setProfilePhoto('');
        setAssignedRoles(new Array(roles.length).fill(false));
    };

    return (
        <form className="needs-validation" onSubmit={submitHandler} noValidate>
            <div className="row g-3">
                <h4>Main</h4>

                <FormCol
                    size="sm-6"
                    id="add-user__first-name"
                    type="text"
                    onChange={firstNameChangeHandler}
                    value={firstName}
                    isValid={null}
                    required
                />
                <FormCol
                    size="sm-6"
                    id="add-user__last-name"
                    type="text"
                    onChange={lastNameChangeHandler}
                    value={lastName}
                    required
                />
                <FormCol
                    size="sm-6"
                    id="add-user__id-number"
                    type="text"
                    onChange={idNumberChangeHandler}
                    value={idNumber}
                    required
                />
                <FormCol
                    size="sm-6"
                    id="add-user__date-of-birth"
                    type="date"
                    onChange={dateOfBirthChangeHandler}
                    value={dateOfBirth}
                    required
                />
                <FormCol
                    size="sm-6"
                    options={['female', 'male', 'non-binary', 'other']}
                    id="add-user__gender"
                    onChange={genderChangeHandler}
                    value={gender}
                    required
                />
                <FormCol
                    size="sm-6"
                    options={['argentinian', '...', '...', '...']}
                    id="add-user__nationality"
                    onChange={nationalityChangeHandler}
                    value={nationality}
                    required
                />

                <h4 className="mt-5">Address</h4>

                <FormCol
                    size="md-12"
                    id="add-user__street-name"
                    type="text"
                    onChange={streetNameChangeHandler}
                    value={streetName}
                    required
                />
                <FormCol
                    size="md-4"
                    id="add-user__house-number"
                    type="text"
                    onChange={houseNumberChangeHandler}
                    value={houseNumber}
                    required
                />
                <FormCol
                    size="md-4"
                    id="add-user__floor"
                    type="text"
                    onChange={floorChangeHandler}
                    value={floor}
                />
                <FormCol
                    size="md-4"
                    id="add-user__apartment"
                    type="text"
                    onChange={apartmentChangeHandler}
                    value={apartment}
                />
                <FormCol
                    size="md-6"
                    id="add-user__city"
                    type="text"
                    onChange={cityChangeHandler}
                    value={city}
                    required
                />
                <FormCol
                    size="md-6"
                    options={['Buenos Aires', '...', '...', '...']}
                    id="add-user__state"
                    onChange={stateChangeHandler}
                    value={state}
                    required
                />

                <h4 className="mt-5">Contact</h4>

                <FormCol
                    size="md-12"
                    id="add-user__email"
                    type="email"
                    onChange={emailChangeHandler}
                    value={email}
                    required
                />
                <FormCol
                    size="md-3"
                    id="add-user__phone-1-code-area"
                    type="text"
                    onChange={phone1CodeAreaChangeHandler}
                    value={phone1CodeArea}
                    required
                />
                <FormCol
                    size="md-9"
                    id="add-user__phone-1-number"
                    type="text"
                    onChange={phone1NumberChangeHandler}
                    value={phone1Number}
                    required
                />
                <FormCol
                    size="md-3"
                    id="add-user__phone-2-code-area"
                    type="text"
                    onChange={phone2CodeAreaChangeHandler}
                    value={phone2CodeArea}
                />
                <FormCol
                    size="md-9"
                    id="add-user__phone-2-number"
                    type="number"
                    onChange={phone2NumberChangeHandler}
                    value={phone2Number}
                />
                <FormCol
                    size="md-12"
                    id="add-user__profile-photo"
                    type="file"
                    className="form-control"
                />
            </div>

            <hr className="my-4" />
            <h4>Roles</h4>

            <div>
                {roles.map((role, i) => {
                    return (
                        <FormCheck
                            id={`add-user__`.concat(role.name)}
                            key={i}
                            checked={selectedRoles[i]}
                            onChange={() => {
                                assignedRolesChangeHandler(i);
                            }}
                        />
                    );
                })}
            </div>
            <FormSubmitBtn element="user" />
        </form>
    );
};

export default AddUserForm;
