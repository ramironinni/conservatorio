import { useEffect, useRef, useState } from 'react';
import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';

const AddUser = () => {
    const [newUser, setNewUser] = useState(null);

    const firstUpdate = useRef(true);

    const getNewUser = (newUser) => {
        setNewUser(newUser);
    };

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        const createUser = async () => {
            const response = await fetch(
                'http://localhost:5000/api/users/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify(newUser),
                }
            );
            const result = await response.json();
            console.log(result);

            if (result) {
                setNewUser(null);
            }
        };

        if (newUser) {
            createUser()
                // .then((data) => data)
                .catch((e) => console.log(e));
        }
    }, [newUser]);

    return (
        <div className="container add-user-container">
            <AddContent element="user">
                <AddUserForm onGetNewUser={getNewUser} />
            </AddContent>
        </div>
    );
};

export default AddUser;
