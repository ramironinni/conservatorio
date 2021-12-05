import Modal from '../../components/shared/Modal/Modal';

const DetailsButtonGroup = ({ onEditUser, onDeleteUser }) => {
    return (
        <div className="col-md-12 text-center">
            <div
                className="btn-group mt-5"
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
                    body={'Are you sure you want to edit this user?'}
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
                    body={'Are you sure you want to delete this user?'}
                    option1={'Yes, DELETE'}
                    option2={'No'}
                    onConfirm={onDeleteUser}
                    id="deleteUser"
                />
            </div>
        </div>
    );
};

export default DetailsButtonGroup;
