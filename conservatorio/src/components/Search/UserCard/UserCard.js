import './UserCard.css';
import { Link } from 'react-router-dom';

const UserCard = ({ name, last, img }) => {
    return (
        <div className="col-lg-6">
            <Link to="/search/user-detail">
                <div className="d-flex align-items-center m-3 p-3 rounded border-success border-start border-5 shadow-sm user-card-container">
                    <div className="user-card-img-container">
                        <img
                            src={img}
                            alt=""
                            className="rounded user-card-img"
                        />
                    </div>
                    <div className="user-card-text ms-3">
                        <p className="m-0 user-card-text-name">
                            {name} {last}
                        </p>
                        <p className="m-0 user-card-text-government-id">
                            12.345.678
                        </p>
                        <p className="m-0 user-card-text-city-state">
                            New York, NY
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default UserCard;
