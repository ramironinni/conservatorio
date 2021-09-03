const UserCard = ({ name, last, img }) => {
    return (
        <div className="user-card-container">
            <div className="user-card-img-container">
                <img src={img} alt="" className="user-card-img" />
            </div>
            <div className="user-card-name">
                {name} {last}
            </div>
            <div className="user-card-government-id">12.345.678</div>
            <div className="user-card-city-state">New York, NY</div>
        </div>
    );
};

export default UserCard;
