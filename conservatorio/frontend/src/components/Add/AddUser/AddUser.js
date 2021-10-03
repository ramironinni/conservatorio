import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';

const AddUser = () => {
    const getNewUser = (newUser) => {
        console.log(newUser);
    };

    return (
        <div className="container add-user-container">
            <AddContent element="user">
                <AddUserForm onGetNewUser={getNewUser} />
            </AddContent>
        </div>
    );
};

export default AddUser;
