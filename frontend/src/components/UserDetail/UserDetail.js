import { useParams } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import ErrorFetchingData from '../Search/ErrorFetchingData/ErrorFetchingData';
import Pending from '../Search/Pending/Pending';
import Modal from '../shared/Modal/Modal';
import DetailsButtonGroup from './DetailsButtonGroup';
import UserDetailField from './UserDetailField';

const UserDetail = () => {
    const { id } = useParams();

    const { data, isPending, error } = useFetch(
        `http://localhost:5000/api/users/id/${id}`
    );

    const onEditUser = () => {};

    const onDeleteUser = () => {
        const deleteUser = async () => {
            //show modal to accept or cancel
            const response = await fetch(
                `http://localhost:5000/api/users/delete/${data.user.id}`,
                {
                    method: 'DELETE',
                }
            );
            const result = await response.json();
            console.log('DELETED', result);
        };

        deleteUser();
    };

    return (
        <div className="container-sm px-5-sm user-detail-container">
            {isPending && <Pending classNames={' mt-5'} />}
            {error && <ErrorFetchingData />}
            {data && console.log(data)}
            {data && (
                <div className="container">
                    <img
                        src="https://via.placeholder.com/150"
                        className="rounded mx-auto d-block my-4"
                        alt="..."
                    />
                    <div className="container">
                        {Object.entries(data.user).map((field, i) => {
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
            )}
        </div>
    );
};

export default UserDetail;
