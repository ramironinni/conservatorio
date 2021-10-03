import GoBackBtn from '../GoBackBtn/GoBackBtn';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found">
                <p>Oops!</p>
                <p>This page doesn't exist.</p>
            </div>
            <GoBackBtn />
        </div>
    );
};

export default NotFound;
