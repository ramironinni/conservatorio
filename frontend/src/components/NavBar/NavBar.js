import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import AuthContext from '../../store/auth-context';
import './NavBar.css';
import NavItemDropdown from './NavItemDropdown/NavItemDropdown';

const NavBar = ({ onLogout }) => {
    const items = [
        'student',
        'professor',
        'record',
        'preceptor',
        'principal',
        'janitor',
        'librarian',
    ];

    const ctx = useContext(AuthContext);

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
                        {ctx.isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to=""
                                    >
                                        Logged Username
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="btn btn-info"
                                        onClick={onLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
