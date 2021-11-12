import { useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import useFetch from '../../hooks/useFetch';
import ErrorFetchingData from '../Search/ErrorFetchingData/ErrorFetchingData';
import Pending from '../Search/Pending/Pending';
import AlertDismissible from '../shared/Modal/AlertDismissible';
import DetailsButtonGroup from './DetailsButtonGroup';
import UserDetailField from './UserDetailField';

const UserDetail = () => {
    const location = useLocation();

    const [user, setUser] = useState();
    const [deletedUser, setDeletedUser] = useState();

    const { id } = useParams();

    const { isPending, error, sendRequest: fetchUser } = useFetch();

    const url = `http://localhost:5000/api/users/id/${id}`;

    useEffect(() => {
        const applyData = (data) => {
            setUser(data.user);
        };

        fetchUser(url, null, applyData);
    }, [fetchUser, url]);

    const onEditUser = () => {};

    const onDeleteUser = () => {
        // const deleteUser = async () => {
        //     //show modal to accept or cancel
        //     const response = await fetch(
        //         `http://localhost:5000/api/users/delete/${user.id}`,
        //         {
        //             method: 'DELETE',
        //         }
        //     );
        //     const result = await response.json();
        //     console.log('DELETED', result);
        // };

        const applyData = (data) => {
            console.log(data);
            setDeletedUser(data);
        };

        fetchUser(
            `http://localhost:5000/api/users/delete/${user.id}`,
            {
                method: 'DELETE',
            },
            applyData
        );
    };

    if (deletedUser) {
        return (
            <Redirect
                to={{
                    pathname: `/search/deleted`,
                    state: { deleted: true },
                }}
            />
        );
    }

    let userCreatedAlert = '';

    if (location.state && location.state.referrer.pathname === '/add/user') {
        userCreatedAlert = (
            <AlertDismissible
                type="success"
                text="User successfully created!"
            />
        );
    }

    let content = '';

    if (isPending) {
        content = <Pending classNames={' mt-5'} />;
    }

    if (user) {
        content = (
            <div className="container">
                <img
                    src="https://via.placeholder.com/150"
                    className="rounded mx-auto d-block my-4"
                    alt="..."
                />
                <div className="container">
                    {Object.entries(user).map((field, i) => {
                        return (
                            <UserDetailField
                                fieldName={field[0]}
                                fieldValue={field[1]}
                                key={i}
                            />
                        );
                    })}
                    <DetailsButtonGroup
                        onEditUser={onEditUser}
                        onDeleteUser={onDeleteUser}
                    />
                </div>
            </div>
        );
    }

    if (error) {
        content = <ErrorFetchingData error={error} />;
    }

    return (
        <div className="container-sm px-5-sm user-detail-container">
            {userCreatedAlert}
            {content}
        </div>
    );
};

export default UserDetail;
