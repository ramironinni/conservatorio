import { useParams } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import ErrorFetchingData from '../Search/ErrorFetchingData/ErrorFetchingData';
import Pending from '../Search/Pending/Pending';
import Modal from '../shared/Modal/Modal';

const UserDetail = () => {
    const { id } = useParams();

    const {
        data: user,
        isPending,
        error,
    } = useFetch(`http://localhost:5000/api/users/id/${id}`);

    const onEditUser = () => {};

    const onDeleteUser = () => {
        const deleteUser = async () => {
            //show modal to accept or cancel
            const response = await fetch(
                `http://localhost:5000/api/users/delete/${user._id}`,
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
            {user && (
                <div className="container">
                    <img
                        src="https://via.placeholder.com/150"
                        className="rounded mx-auto d-block my-4"
                        alt="..."
                    />
                    <div className="row">
                        <div className="col-md-2 bg-secondary">First name</div>
                        <div className="col-md-9 border">{user.firstName}</div>
                        <div className="col-md-2 bg-secondary">Last name</div>
                        <div className="col-md-9 border">{user.lastName}</div>
                        <div className="w-100 my-3"></div>
                        <div className="col-md-2 bg-secondary">First name</div>
                        <div className="col-md-9 border">{user.firstName}</div>
                        <div className="col-md-2 bg-secondary">Last name</div>
                        <div className="col-md-9 border">{user.lastName}</div>
                        <div className="w-100 my-3"></div>
                        <div className="col-md-12 text-center">
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic mixed styles example"
                            >
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editUser"
                                >
                                    Edit
                                </button>
                                <Modal
                                    title="Edit confirmation"
                                    body={
                                        'Are you sure you want to edit this user?'
                                    }
                                    option1={'Yes'}
                                    option2={'No'}
                                    onConfirm={onEditUser}
                                    id="editUser"
                                />

                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteUser"
                                >
                                    Delete
                                </button>
                                <Modal
                                    title="Delete confirmation"
                                    body={
                                        'Are you sure you want to delete this user?'
                                    }
                                    option1={'Yes, DELETE'}
                                    option2={'No'}
                                    onConfirm={onDeleteUser}
                                    id="deleteUser"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetail;
