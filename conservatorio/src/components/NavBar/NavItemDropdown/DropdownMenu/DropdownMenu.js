import DropdownItem from './DropdownItem/DropdownItem';

const DropdownMenu = ({ items }) => {
    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {items.map((item) => {
                return <DropdownItem title={item} />;
            })}
        </ul>
    );
};

export default DropdownMenu;
