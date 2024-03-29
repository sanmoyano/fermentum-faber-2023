import { Icon, Link, Stack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

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
                <MobileNavBar />
                <Link
                    href="https://pency.app/fermentum"
                    sx={{ display: { base: "flex", md: "none" } }}
                    target={"_blank"}
                    textDecoration={"none"}
                    textStyle={"link"}
                >
                    <Stack alignItems={"end"} color={"brand.200"} direction={"row"} padding={4}>
                        <Text fontWeight={"700"} textAlign={"center"}>
                            Shop
                        </Text>
                        <Icon as={AiFillShopping} h={8} w={8} />
                    </Stack>
                </Link>
                <DesktopNavBar />
            </Stack>
        </Stack>
    );
};

export default Header;
