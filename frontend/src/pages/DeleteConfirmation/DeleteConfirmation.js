import { Link, useLocation } from 'react-router-dom';
import capitalizeWord from '../../utils/capitalizeWord';

const DeleteConfirmation = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const elementType = query.get('type');

    return (
        <div className="container delete-confirmation-container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div
                        className="alert alert-success text-center"
                        role="alert"
                    >
                        {`${capitalizeWord(elementType)} successfully deleted!`}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <Link to="/" type="button" className="btn btn-primary">
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
