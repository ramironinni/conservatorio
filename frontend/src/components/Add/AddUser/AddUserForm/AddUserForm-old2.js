import FormSubmitBtn from '../../../Forms/FormSubmitBtn/FormSubmitBtn';
import FormCheck from '../../../Forms/FormCheck/FormCheck';
import { useState } from 'react';
import roles from '../../../../utils/roles';
import useInput from '../../../../hooks/useInput';
import InputField from '../../../shared/Form/inputField';
import SelectField from '../../../shared/Form/SelectField';

const isNotEmpty = (value) => value.trim() !== '';

const AddUserForm = ({ onGetNewUser, onSubmit }) => {
    const {
        enteredValue: firstName,
        valueIsValid: firstNameIsValid,
        validationFeedback: firstNameFeedback,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty);

    const {
        enteredValue: lastName,
        valueIsValid: lastNameIsValid,
        validationFeedback: lastNameFeedback,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);

    const {
        enteredValue: idNumber,
        valueIsValid: idNumberIsValid,
        validationFeedback: idNumberFeedback,
        valueChangeHandler: idNumberChangeHandler,
        inputBlurHandler: idNumberBlurHandler,
        reset: resetIdNumber,
    } = useInput(isNotEmpty);

    const {
        enteredValue: dateOfBirth,
        valueIsValid: dateOfBirthIsValid,
        validationFeedback: dateOfBirthFeedback,
        valueChangeHandler: dateOfBirthChangeHandler,
        inputBlurHandler: dateOfBirthBlurHandler,
        reset: resetDateOfBirth,
    } = useInput(isNotEmpty);

    const {
        enteredValue: gender,
        valueIsValid: genderIsValid,
        validationFeedback: genderFeedback,
        valueChangeHandler: genderChangeHandler,
        inputBlurHandler: genderBlurHandler,
        reset: resetGender,
    } = useInput(isNotEmpty);

    const {
        enteredValue: nationality,
        valueIsValid: nationalityIsValid,
        validationFeedback: nationalityFeedback,
        valueChangeHandler: nationalityChangeHandler,
        inputBlurHandler: nationalityBlurHandler,
        reset: resetNationality,
    } = useInput(isNotEmpty);

    const {
        enteredValue: streetName,
        valueIsValid: streetNameIsValid,
        validationFeedback: streetNameFeedback,
        valueChangeHandler: streetNameChangeHandler,
        inputBlurHandler: streetNameBlurHandler,
        reset: resetStreetName,
    } = useInput(isNotEmpty);

    const {
        enteredValue: houseNumber,
        valueIsValid: houseNumberIsValid,
        validationFeedback: houseNumberFeedback,
        valueChangeHandler: houseNumberChangeHandler,
        inputBlurHandler: houseNumberBlurHandler,
        reset: resetHouseNumber,
    } = useInput(isNotEmpty);

    const {
        enteredValue: floor,
        valueIsValid: floorIsValid,
        validationFeedback: floorFeedback,
        valueChangeHandler: floorChangeHandler,
        inputBlurHandler: floorBlurHandler,
        reset: resetFloor,
    } = useInput(isNotEmpty);

    const {
        enteredValue: apartment,
        valueIsValid: apartmentIsValid,
        validationFeedback: apartmentFeedback,
        valueChangeHandler: apartmentChangeHandler,
        inputBlurHandler: apartmentBlurHandler,
        reset: resetApartment,
    } = useInput(isNotEmpty);

    const {
        enteredValue: city,
        valueIsValid: cityIsValid,
        validationFeedback: cityFeedback,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity,
    } = useInput(isNotEmpty);

    const {
        enteredValue: state,
        valueIsValid: stateIsValid,
        validationFeedback: stateFeedback,
        valueChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
        reset: resetState,
    } = useInput(isNotEmpty);

    const {
        enteredValue: email,
        valueIsValid: emailIsValid,
        validationFeedback: emailFeedback,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isNotEmpty);

    const {
        enteredValue: phone1CodeArea,
        valueIsValid: phone1CodeAreaIsValid,
        validationFeedback: phone1CodeAreaFeedback,
        valueChangeHandler: phone1CodeAreaChangeHandler,
        inputBlurHandler: phone1CodeAreaBlurHandler,
        reset: resetPhone1CodeArea,
    } = useInput(isNotEmpty);

    const {
        enteredValue: phone1Number,
        valueIsValid: phone1NumberIsValid,
        validationFeedback: phone1NumberFeedback,
        valueChangeHandler: phone1NumberChangeHandler,
        inputBlurHandler: phone1NumberBlurHandler,
        reset: resetPhone1Number,
    } = useInput(isNotEmpty);

    const {
        enteredValue: phone2CodeArea,
        valueIsValid: phone2CodeAreaIsValid,
        validationFeedback: phone2CodeAreaFeedback,
        valueChangeHandler: phone2CodeAreaChangeHandler,
        inputBlurHandler: phone2CodeAreaBlurHandler,
        reset: resetPhone2CodeArea,
    } = useInput(isNotEmpty);

    const {
        enteredValue: phone2Number,
        valueIsValid: phone2NumberIsValid,
        validationFeedback: phone2NumberFeedback,
        valueChangeHandler: phone2NumberChangeHandler,
        inputBlurHandler: phone2NumberBlurHandler,
        reset: resetPhone2Number,
    } = useInput(isNotEmpty);

    const {
        enteredValue: profilePhoto,
        valueIsValid: profilePhotoIsValid,
        validationFeedback: profilePhotoFeedback,
        valueChangeHandler: profilePhotoChangeHandler,
        inputBlurHandler: profilePhotoBlurHandler,
        reset: resetProfilePhoto,
    } = useInput(isNotEmpty);

    const [selectedRoles, setAssignedRoles] = useState(
        new Array(roles.length).fill(false)
    );

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid) {
        formIsValid = true;
    }

    const assignedRolesChangeHandler = (position) => {
        const updatedCheckedState = selectedRoles.map((item, index) =>
            index === position ? !item : item
        );

        setAssignedRoles(updatedCheckedState);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

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

        // onGetNewUser(newUser);

        resetFirstName();
        resetLastName();
        resetIdNumber('');
        resetDateOfBirth('');
        resetGender('');
        resetNationality('');
        resetStreetName('');
        resetHouseNumber('');
        resetFloor('');
        resetApartment('');
        resetCity('');
        resetState('');
        resetEmail('');
        resetPhone1CodeArea('');
        resetPhone1Number('');
        resetPhone2CodeArea('');
        resetPhone2Number('');
        resetProfilePhoto('');
        setAssignedRoles(new Array(roles.length).fill(false));
    };

    return (
        <form className="needs-validation" onSubmit={submitHandler} noValidate>
            <div className="row g-3">
                <h4>Main</h4>
                <InputField
                    container="add-user__first-name-container col-sm-6"
                    id="add-user__first-name"
                    type="text"
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}
                    value={firstName}
                    isValid={firstNameFeedback}
                    required
                />
                <InputField
                    container="add-user__last-name-container col-sm-6"
                    id="add-user__last-name"
                    type="text"
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}
                    value={lastName}
                    isValid={lastNameFeedback}
                    required
                />
                <InputField
                    container="add-user__id-number-container col-sm-6"
                    id="add-user__id-number"
                    type="text"
                    onChange={idNumberChangeHandler}
                    onBlur={idNumberBlurHandler}
                    value={idNumber}
                    isValid={idNumberFeedback}
                    required
                />
                <InputField
                    container="add-user__date-of-birth-container col-sm-6"
                    id="add-user__date-of-birth"
                    type="date"
                    onChange={dateOfBirthChangeHandler}
                    onBlur={dateOfBirthBlurHandler}
                    value={dateOfBirth}
                    isValid={dateOfBirthFeedback}
                    required
                />

                <SelectField
                    container="add-user__gender-container col-sm-6"
                    id="add-user__gender"
                    options={['female', 'male', 'non-binary', 'other']}
                    onChange={genderChangeHandler}
                    onBlur={genderBlurHandler}
                    value={gender}
                    isValid={genderFeedback}
                    required
                />

                <SelectField
                    container="add-user__nationality-container col-sm-6"
                    id="add-user__nationality"
                    options={['argentinian', '...', '...', '...']}
                    onChange={nationalityChangeHandler}
                    onBlur={nationalityBlurHandler}
                    value={nationality}
                    isValid={nationalityFeedback}
                    required
                />

                <h4 className="mt-5">Address</h4>

                <InputField
                    container="add-user__street-name-container col-md-6"
                    id="add-user__street-name"
                    type="text"
                    onChange={streetNameChangeHandler}
                    onBlur={streetNameBlurHandler}
                    value={streetName}
                    isValid={streetNameFeedback}
                    required
                />

                <InputField
                    container="add-user__house-number-container col-md-6"
                    id="add-user__house-number"
                    type="text"
                    onChange={houseNumberChangeHandler}
                    onBlur={houseNumberBlurHandler}
                    value={houseNumber}
                    isValid={houseNumberFeedback}
                    required
                />

                <InputField
                    container="add-user__floor-container col-md-6"
                    id="add-user__floor"
                    type="text"
                    onChange={floorChangeHandler}
                    onBlur={floorBlurHandler}
                    value={floor}
                    isValid={floorFeedback}
                    required
                />

                <InputField
                    container="add-user__apartment-container col-md-6"
                    id="add-user__apartment"
                    type="text"
                    onChange={apartmentChangeHandler}
                    onBlur={apartmentBlurHandler}
                    value={apartment}
                    isValid={apartmentFeedback}
                    required
                />

                <InputField
                    container="add-user__city-container col-md-6"
                    id="add-user__city"
                    type="text"
                    onChange={cityChangeHandler}
                    onBlur={cityBlurHandler}
                    value={city}
                    isValid={cityFeedback}
                    required
                />

                <SelectField
                    container="add-user__state-container col-md-6"
                    id="add-user__state"
                    options={['Buenos Aires', '...', '...', '...']}
                    onChange={stateChangeHandler}
                    onBlur={stateBlurHandler}
                    value={state}
                    isValid={stateFeedback}
                    required
                />

                <h4 className="mt-5">Contact</h4>

                <InputField
                    container="add-user__email-container col-md-12"
                    id="add-user__email"
                    type="text"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={email}
                    isValid={emailFeedback}
                    required
                />

                <InputField
                    container="add-user__phone-1-code-area-container col-md-3"
                    id="add-user__phone-1-code-area"
                    type="text"
                    onChange={phone1CodeAreaChangeHandler}
                    onBlur={phone1CodeAreaBlurHandler}
                    value={phone1CodeArea}
                    isValid={phone1CodeAreaFeedback}
                    required
                />

                <InputField
                    container="add-user__phone-1-number-container col-md-9"
                    id="add-user__phone-1-number"
                    type="text"
                    onChange={phone1NumberChangeHandler}
                    onBlur={phone1NumberBlurHandler}
                    value={phone1Number}
                    isValid={phone1NumberFeedback}
                    required
                />

                <InputField
                    container="add-user__phone-2-code-area-container col-md-3"
                    id="add-user__phone-2-code-area"
                    type="text"
                    onChange={phone2CodeAreaChangeHandler}
                    onBlur={phone2CodeAreaBlurHandler}
                    value={phone2CodeArea}
                    isValid={phone2CodeAreaFeedback}
                    required
                />

                <InputField
                    container="add-user__phone-2-number-container col-md-9"
                    id="add-user__phone-2-number"
                    type="text"
                    onChange={phone2NumberChangeHandler}
                    onBlur={phone2NumberBlurHandler}
                    value={phone2Number}
                    isValid={phone2NumberFeedback}
                    required
                />

                <InputField
                    container="add-user__profile-photo-container col-md-12"
                    id="add-user__profile-photo"
                    type="file"
                    onChange={profilePhotoChangeHandler}
                    onBlur={profilePhotoBlurHandler}
                    value={profilePhoto}
                    isValid={profilePhotoFeedback}
                    required
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
            <FormSubmitBtn element="user" disabled={!formIsValid} />
        </form>
    );
};

export default AddUserForm;
