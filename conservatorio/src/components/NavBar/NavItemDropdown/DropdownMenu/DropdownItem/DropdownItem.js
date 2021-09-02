const DropdownItem = ({ title }) => {
    return (
        <li>
            <a className="dropdown-item" href="#">
                {title}
            </a>
        </li>
    );
};

export default DropdownItem;
