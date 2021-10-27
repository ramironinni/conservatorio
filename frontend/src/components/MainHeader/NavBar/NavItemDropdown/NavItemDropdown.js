import DropdownMenu from './DropdownMenu/DropdownMenu';
import NavLinkDropdownToggle from './NavLinkDropdownToggle/NavLinkDropdownToggle';

const NavItemDropdown = ({ title, items, action }) => {
    return (
        <li className="nav-item dropdown">
            <NavLinkDropdownToggle title={title} />
            <DropdownMenu items={items} action={action} />
        </li>
    );
};

export default NavItemDropdown;
