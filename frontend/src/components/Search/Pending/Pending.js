const Pending = ({ classNames }) => {
    return (
        <div className={`text-center ${classNames}`}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Pending;
