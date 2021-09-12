import AddContent from '../AddContent/AddContent';
import AddUserForm from './AddUserForm/AddUserForm';

const AddUser = () => {
    return (
        <div className="container add-user-container">
            <AddContent element="user">
                <AddUserForm />
            </AddContent>
        </div>
    );
};

export default AddUser;
