import { Stack, Link, Icon } from "@chakra-ui/react";

import NavItem from "./NavItem";

const navItems = [
    { name: "cervezas", path: "/cervezas" },
    { name: "servicios", path: "/servicios" },
    { name: "donde", path: "/donde" },
    { name: "nosotros", path: "/nosotros" },
];

const NavBar = () => {
    return (
        <Stack color={"brand.200"} direction={"row"} spacing={8}>
            {navItems.map((item, i) => (
                <NavItem key={i} name={item.name} path={item.path} />
            ))}
            <Link
                href="https://pency.app/fermentum"
                sx={{ textDecoration: "underline" }}
                target={"_blank"}
                textStyle={"link"}
            >
                shop
                <Icon as={""} />
            </Link>
        </Stack>
    );
};

export default NavBar;
