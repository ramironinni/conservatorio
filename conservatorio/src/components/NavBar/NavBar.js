import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './NavBar.css';
import NavItemDropdown from './NavItemDropdown/NavItemDropdown';

const NavBar = () => {
    const items = [
        'student',
        'professor',
        'record',
        'preceptor',
        'principal',
        'janitor',
        'librarian',
    ];

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="navbar-logo" src={logo} alt="site logo" />
                </Link>
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
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <NavItemDropdown
                            title="Search"
                            items={items}
                            action="search"
                        />
                        <NavItemDropdown
                            title="Add"
                            items={items}
                            action="add"
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
