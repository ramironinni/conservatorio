import { useLocation } from 'react-router-dom';

const UserDetail = () => {
    const location = useLocation();
    console.log(location.state.user);
    const user = location.state.user;

    const clickHandler = () => {
        const deleteUser = async () => {
            const response = await fetch(
                `http://localhost:5000/users/delete/${user._id}`,
                {
                    method: 'DELETE',
                }
            );
            const result = await response.json();
            console.log(result);
        };

        deleteUser();
    };

    return (
        <div className="user-detail-container">
            {user.firstName}
            {user.lastName}
            <button onClick={clickHandler}>Delete</button>
        </div>
    );
};

export default UserDetail;
