import { Link } from "react-router-dom";

const NavItem = ({ name, path }) => {
    return <Link to={path}>{name}</Link>;
};

export default NavItem;
