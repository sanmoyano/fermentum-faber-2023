import { Stack, Link, Icon, Text } from "@chakra-ui/react";
import { AiFillShopping } from "react-icons/ai";

import NavItem from "./NavItem";

const navItems = [
    { name: "inicio", path: "/" },
    { name: "cervezas", path: "/cervezas" },
    { name: "servicios", path: "/servicios" },
    { name: "donde", path: "/donde" },
    { name: "nosotros", path: "/nosotros" },
];

const NavBar = () => {
    return (
        <>
            {navItems.map((item, i) => (
                <NavItem key={i} name={item.name} path={item.path} />
            ))}
            <Link
                href="https://pency.app/fermentum"
                sx={{ textDecoration: "underline" }}
                target={"_blank"}
                textStyle={"link"}
            >
                <Stack alignItems={"center"} direction={"row"}>
                    <Text>shop</Text>
                    <Icon as={AiFillShopping} h={5} w={5} />
                </Stack>
            </Link>
        </>
    );
};

export default NavBar;
