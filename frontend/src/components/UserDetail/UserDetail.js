import { useLocation } from 'react-router-dom';

const UserDetail = () => {
    const location = useLocation();
    console.log(location.state.user);

    return <div className="user-detail-container"></div>;
};

export default UserDetail;
