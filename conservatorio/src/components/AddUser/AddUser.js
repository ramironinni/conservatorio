import AddUserForm from './AddUserForm/AddUserForm';

const AddUser = () => {
    return (
        <div className="add-user-container container">
            <main>
                <div className="py-5 text-center">
                    <h2>Add new user</h2>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-12 col-lg-9">
                        <AddUserForm />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddUser;
