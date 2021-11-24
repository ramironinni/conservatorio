import { useState } from 'react';
import {
    Redirect,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';
import useFetch from '../../../hooks/useFetch';
import Pending from '../../Search/Pending/Pending';
import ErrorFetchingData from '../../Search/ErrorFetchingData/ErrorFetchingData';
import useForm from '../../../hooks/useForm';
import { formConfig } from '../../../utils/forms/addUser/formConfig';

const AddUser = () => {
    const location = useLocation();

    const [createdUser, setCreatedUser] = useState(null);

    const { renderFormFields, isFormValid } = useForm(formConfig);

    const { isPending, error, sendRequest: saveUser } = useFetch();

    const submitHandler = (e) => {
        e.preventDefault();

        const form = e.target;

        console.log({
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            idNumber: form.idNumber.value,
            dateOfBirth: form.dateOfBirth.value,
            gender: form.gender.value,
            nationality: form.nationality.value,
            streetName: form.streetName.value,
            houseNumber: form.houseNumber.value,
            floor: form.floor.value,
            apartment: form.apartment.value,
            city: form.city.value,
            state: form.state.value,
            phone1CodeArea: form.phone1CodeArea.value,
            phone1Number: form.phone1Number.value,
            phone2CodeArea: form.phone2CodeArea.value,
            phone2Number: form.phone2Number.value,
            profilePhoto: form.profilePhoto.value,
        });
    };

    const addNewUserHandler = async (newUser) => {
        const applyData = (data) => {
            console.log(data);
            setCreatedUser(data);
        };

        saveUser(
            'http://localhost:5000/api/users/create',
            {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            },
            applyData
        );
    };

    if (createdUser) {
        return (
            <Redirect
                to={{
                    pathname: `/search/users/id/${createdUser._id}`,
                    state: { referrer: location },
                }}
            />
        );
    }

    let content = (
        <div className="container add-user-container">
            <AddContent element="user">
                <AddUserForm
                    onGetNewUser={addNewUserHandler}
                    onSubmit={submitHandler}
                    isFormValid={isFormValid()}
                >
                    {renderFormFields()}
                </AddUserForm>
            </AddContent>
        </div>
    );

    if (isPending) {
        content = <Pending />;
    }

    if (error) {
        content = <ErrorFetchingData error={error} />;
    }

    return content;
};

export default AddUser;
