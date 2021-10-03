const NavLinkDropdownToggle = ({ title }) => {
    return (
        <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            {title}
        </div>
    );
};

export default NavLinkDropdownToggle;
