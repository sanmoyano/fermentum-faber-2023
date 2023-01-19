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
                target={"_blank"}
                textDecoration={"none"}
                textStyle={"link"}
            >
                <Stack alignItems={"center"} color={"brand.200"} direction={"row"}>
                    <Text fontWeight={"700"} textAlign={"center"}>
                        Shop
                    </Text>
                    <Icon as={AiFillShopping} h={8} w={8} />
                </Stack>
            </Link>
        </>
    );
};

export default NavBar;
