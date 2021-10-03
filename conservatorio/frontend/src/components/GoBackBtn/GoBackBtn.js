import { Link } from 'react-router-dom';

const GoBackBtn = () => {
    return (
        <Link to="/" className="go-back-btn">
            <span className="material-icons">navigate_before</span> Go back
        </Link>
    );
};

export default GoBackBtn;
