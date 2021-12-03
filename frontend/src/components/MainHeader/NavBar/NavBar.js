import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { authActions } from '../../../store';
import './NavBar.css';
import NavItemDropdown from './NavItemDropdown/NavItemDropdown';

const NavBar = () => {
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

    console.log('isLoggedIn', isLoggedIn);
    const email = useSelector((state) => state.authentication.email);
    const dispatch = useDispatch();

    const items = [
        'student',
        'professor',
        'record',
        'preceptor',
        'principal',
        'janitor',
        'librarian',
    ];

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        className="navbar-logo rounded"
                        src={logo}
                        alt="site logo"
                    />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-main"
                    aria-controls="navbar-main"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-main">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                                exact
                            >
                                Home
                            </NavLink>
                        </li>
                        <NavItemDropdown
                            title="Search"
                            items={items}
                            action="search"
                        />
                        <NavItemDropdown
                            title="Add"
                            items={['user', 'record']}
                            action="add"
                        />
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {isLoggedIn && (
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
                                        <NavLink
                                            className="dropdown-item"
                                            to="/user/profile"
                                        >
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
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
