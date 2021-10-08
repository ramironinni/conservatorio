import { Link } from 'react-router-dom';

const UserCard = ({ user, name, last, img }) => {
    return (
        <div className="col-lg-6">
            <Link
                to={{
                    pathname: `/search/user-detail/${user._id}`,
                    state: { from: 'search', user },
                }}
                className="btn btn-semidark d-flex align-items-center m-3 p-3 rounded-3  border-start border-5 user-card-container"
            >
                <div className="user-card-img-container">
                    <img src={img} alt="" className="rounded user-card-img" />
                </div>
                <div className="user-card-text ms-3 d-flex flex-column align-items-start">
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
            </Link>
        </div>
    );
};

export default UserCard;
