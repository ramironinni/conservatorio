import DropdownMenu from './DropdownMenu/DropdownMenu';
import NavLinkDropdownToggle from './NavLinkDropdownToggle/NavLinkDropdownToggle';

const NavItemDropdown = ({ title, items }) => {
    return (
        <li className="nav-item dropdown">
            <NavLinkDropdownToggle title={title} />
            <DropdownMenu items={items} />
        </li>
    );
};

export default NavItemDropdown;
