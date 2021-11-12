import { useEffect, useRef, useState } from 'react';
import {
    Redirect,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';
import useFetch from '../../../hooks/useFetch';
import Pending from '../../Search/Pending/Pending';
import ErrorFetchingData from '../../Search/ErrorFetchingData/ErrorFetchingData';

const AddUser = () => {
    const location = useLocation();

    const [createdUser, setCreatedUser] = useState(null);

    const { isPending, error, sendRequest: saveUser } = useFetch();

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
                <AddUserForm onGetNewUser={addNewUserHandler} />
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
