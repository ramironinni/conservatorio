import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';
import useFetch from '../../../hooks/useFetch';
import ErrorFetchingData from '../../../components/shared/ErrorFetchingData/ErrorFetchingData';
import useForm from '../../../hooks/useForm';
import { formConfig } from '../../../utils/forms/addUser/formConfig';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Pending from '../../../components/shared/Pending/Pending';

const AddUser = () => {
    const location = useLocation();
    const history = useHistory();

    const [createdUser, setCreatedUser] = useState(null);

    const { renderFormFields, isFormValid } = useForm(formConfig);

    const { isPending, error, sendRequest: saveUser } = useFetch();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (isFormValid()) {
            const form = e.target;

            await addNewUser({
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
        }
    };

    useEffect(() => {
        if (createdUser) {
            history.push(
                `/search/users/id/${createdUser._id}?user-created=true`
            );
        }
    }, [createdUser, history]);

    const addNewUser = async (newUser) => {
        const applyData = (data) => {
            setCreatedUser(data);
        };

        await saveUser(
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
        // return (
        //     <Redirect
        //         to={{
        //             pathname: `/search/users/id/${createdUser._id}`,
        //             state: { referrer: location },
        //         }}
        //     />
        // );
        // history.push(`/search/users/id/${createdUser._id}`);
    }

    let content = (
        <div className="container add-user-container">
            <AddContent element="user">
                <AddUserForm
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
