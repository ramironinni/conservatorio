import { useEffect, useRef, useState } from 'react';
import {
    Redirect,
    useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';

const AddUser = () => {
    const location = useLocation();

    const [newUser, setNewUser] = useState(null);
    const [userCreatedId, setUserCreatedId] = useState(false);

    const firstUpdate = useRef(true);

    const addNewUserHandler = (newUser) => {
        setNewUser(newUser);
    };

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        const createUser = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/users/create',
                    {
                        method: 'POST',
                        body: JSON.stringify(newUser),
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();

                if (result) {
                    setUserCreatedId(result._id);
                    console.log(result);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        if (newUser) {
            createUser();
        }
    }, [newUser]);

    if (userCreatedId) {
        return (
            <Redirect
                to={{
                    pathname: `/search/users/id/${userCreatedId}`,
                    search: '?utm=your+face',
                    state: { referrer: location },
                }}
            />
        );
    }

    return (
        <div className="container add-user-container">
            <AddContent element="user">
                <AddUserForm onGetNewUser={addNewUserHandler} />
            </AddContent>
        </div>
    );
};

export default AddUser;
