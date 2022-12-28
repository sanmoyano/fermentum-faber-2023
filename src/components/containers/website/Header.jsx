import { Stack } from "@chakra-ui/react";

import { Logo, NavBar } from ".";

const Header = () => {
    return (
        <Stack
            bgColor={"transparent"}
            paddingInline={24}
            position={"absolute"}
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
