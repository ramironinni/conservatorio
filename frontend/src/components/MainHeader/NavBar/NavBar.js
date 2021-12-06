import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { authActions } from '../../../store/auth';
import MainMenu from './MainMenu';
import './NavBar.css';
import UserMenu from './UserMenu';

const NavBar = () => {
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

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
                    <MainMenu items={items} />
                    {isLoggedIn && <UserMenu onLogout={logoutHandler} />}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
