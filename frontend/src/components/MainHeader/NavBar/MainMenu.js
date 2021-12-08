import { NavLink } from 'react-router-dom';
import NavItemDropdown from './NavItemDropdown/NavItemDropdown';

const MainMenu = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/search"
                    exact
                >
                    Search
                </NavLink>
            </li>

            <NavItemDropdown
                title="Add"
                items={['user', 'record']}
                action="add"
            />
        </ul>
    );
};

export default MainMenu;
