import { Link } from 'react-router-dom';

const DropdownItem = ({ action, title }) => {
    const titleCap = title[0].toUpperCase() + title.slice(1).toLowerCase();
    return (
        <li>
            <Link className="dropdown-item" to={`/${action}/${title}`}>
                {titleCap}
            </Link>
        </li>
    );
};

export default DropdownItem;
