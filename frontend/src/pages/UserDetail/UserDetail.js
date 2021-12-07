import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useFetch from '../../hooks/useFetch';
import ErrorFetchingData from '../Search/ErrorFetchingData/ErrorFetchingData';
import Pending from '../Search/Pending/Pending';
import AlertDismissible from '../../components/shared/Modal/AlertDismissible';
import DetailsButtonGroup from './DetailsButtonGroup';
import UserDetailField from './UserDetailField';

const UserDetail = () => {
    const location = useLocation();

    const { id } = useParams();

    const [user, setUser] = useState();
    const [deletedUser, setDeletedUser] = useState();
    const [url, setUrl] = useState(`http://localhost:5000/api/users/id/${id}`);
    const [config, setConfig] = useState(null);

    const { isPending, error, sendRequest: fetchUser } = useFetch();

    useEffect(() => {
        const applyData = (data) => {
            if (!config) {
                setUser(data.user);
            }
            if (config) {
                setDeletedUser(true);
            }
        };

        fetchUser(url, config, applyData);

        return () => {};
    }, [fetchUser, url, config]);

    const onEditUser = () => {};

    const onDeleteUser = () => {
        setUrl(`http://localhost:5000/api/users/delete/${user.id}`);
        setConfig({ method: 'DELETE' });
    };

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

    if (deletedUser) {
        content = (
            <AlertDismissible
                type="success"
                text="User successfully deleted!"
            />
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
