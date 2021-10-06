import DropdownItem from './DropdownItem/DropdownItem';

const DropdownMenu = ({ action, items }) => {
    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {items.map((item, i) => {
                return <DropdownItem action={action} title={item} key={i} />;
            })}
        </ul>
    );
};

export default DropdownMenu;
