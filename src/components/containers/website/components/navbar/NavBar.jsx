import { Stack } from "@chakra-ui/react";

import NavItem from "./NavItem";

const navItems = ["cervezas", "servicios", "donde estamos", "nosotros", "shop"];

const NavBar = () => {
    return (
        <Stack color={"brand.200"} direction={"row"} spacing={8}>
            {navItems.map((item, i) => (
                <NavItem key={i} name={item} />
            ))}
        </Stack>
    );
};

export default NavBar;
