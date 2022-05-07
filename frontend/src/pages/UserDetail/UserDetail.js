import { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useFetch from '../../hooks/useFetch';
import ErrorFetchingData from '../../components/shared/ErrorFetchingData/ErrorFetchingData';
import AlertDismissible from '../../components/shared/Modal/AlertDismissible';
import DetailsButtonGroup from './DetailsButtonGroup';
import Pending from '../../components/shared/Pending/Pending';
import UserInformation from './UserInformation/UserInformation';

const UserDetail = () => {
    const location = useLocation();
    const history = useHistory();

    const { id } = useParams();

    const [user, setUser] = useState();
    // const [deletedUser, setDeletedUser] = useState();
    const [url, setUrl] = useState(`http://localhost:5000/api/users/id/${id}`);
    const [config, setConfig] = useState(null);

    const { isPending, error, sendRequest: fetchUser } = useFetch();

    useEffect(() => {
        const applyData = (data) => {
            if (!config) {
                setUser(data.user);
            }
            if (config && config.method === 'DELETE') {
                // setDeletedUser(true);
                history.push('/delete-confirmation?type=user');
            }
        };

        fetchUser(url, config, applyData);

        return () => {};
    }, [fetchUser, url, config, history]);

    const onEditUser = () => {};

    const onDeleteUser = () => {
        setUrl(`http://localhost:5000/api/users/delete/${user.id}`);
        setConfig({ method: 'DELETE' });
    };

    let userCreatedAlert = '';

    // if (location.state && location.state.referrer.pathname === '/add/user') {

    const queryParams = new URLSearchParams(location.search);
    const userCreated = queryParams.get('user-created');

    if (userCreated) {
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
                    <UserInformation user={user} />
                    <DetailsButtonGroup
                        onEditUser={onEditUser}
                        onDeleteUser={onDeleteUser}
                    />
                </div>
            </div>
        );
    }

    // if (deletedUser) {
    //     content = (
    //         <AlertDismissible
    //             type="success"
    //             text="User successfully deleted!"
    //         />
    //     );
    // }

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
