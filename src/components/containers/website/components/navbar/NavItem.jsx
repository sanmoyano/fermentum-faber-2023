import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const NavItem = ({ name, path }) => {
    return (
        <Link to={path}>
            <Text textStyle={"link"}>{name}</Text>
        </Link>
    );
};

export default NavItem;
