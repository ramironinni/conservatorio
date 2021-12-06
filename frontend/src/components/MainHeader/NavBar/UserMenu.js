import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserMenu = ({ onLogout }) => {
    const email = useSelector((state) => state.authentication.email);

    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="bi bi-person-fill"></i>&nbsp;
                    {email}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                        <NavLink className="dropdown-item" to="/user/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="dropdown-item"
                            to="/user/configuration"
                        >
                            Configuration
                        </NavLink>
                    </li>

                    <li>
                        <button
                            className="dropdown-item"
                            type="button"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </ul>
    );
};

export default UserMenu;
