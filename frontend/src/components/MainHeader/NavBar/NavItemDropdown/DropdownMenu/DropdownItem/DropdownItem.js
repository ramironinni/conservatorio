import { NavLink } from 'react-router-dom';

const DropdownItem = ({ action, title }) => {
    const titleCap = title[0].toUpperCase() + title.slice(1).toLowerCase();
    return (
        <li>
            {/* <NavLink className="dropdown-item" to={`/${action}/${title}`}> */}
            <NavLink className="dropdown-item" to={`/${action}`}>
                {titleCap}
            </NavLink>
        </li>
    );
};

export default DropdownItem;
