import { Stack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { Logo, DesktopNavBar, MobileNavBar } from ".";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <Stack
            bgColor={pathname.startsWith("/donde/") ? "brand.500" : "transparent"}
            justifyContent={"space-between"}
            position={pathname.startsWith("/donde/") ? "static" : "absolute"}
            width={"100%"}
            zIndex={1}
        >
            <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                marginBlock={6}
                paddingInline={{ base: 6, lg: 24 }}
                position={"relative"}
            >
                <Logo />
                <DesktopNavBar />
                <MobileNavBar />
            </Stack>
        </Stack>
    );
};

export default Header;
