import { Link } from 'react-router-dom';

const UserCard = ({ user, name, last, img, created }) => {
    return (
        <div className="col-lg-6">
            <Link
                to={`/search/users/id/${user._id}`}
                className="btn btn-semidark d-flex align-items-center m-3 p-3 rounded-3  border-start border-5 user-card-container"
            >
                <div className="user-card__img-container">
                    <img src={img} alt="" className="rounded user-card__img" />
                </div>
                <div className="user-card__text ms-3 d-flex flex-column align-items-start">
                    <p className="m-0 user-card__text-name">
                        {`${last}, ${name}`}
                    </p>
                    <p className="m-0 user-card__text-government-id">
                        12.345.678
                    </p>
                    <p className="m-0 user-card__text-city-state">
                        New York, NY
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default UserCard;
