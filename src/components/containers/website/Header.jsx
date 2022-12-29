import { Stack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { Logo, NavBar } from ".";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <Stack
            bgColor={pathname.startsWith("/donde/") ? "brand.500" : "transparent"}
            paddingInline={24}
            position={pathname.startsWith("/donde/") ? "static" : "absolute"}
            width={"100%"}
            zIndex={1}
        >
            <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                marginBlock={6}
                position={"relative"}
            >
                <Logo />
                <NavBar />
            </Stack>
        </Stack>
    );
};

export default Header;
