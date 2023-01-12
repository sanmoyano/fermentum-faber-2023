import { Stack } from "@chakra-ui/react";

import NavBar from "./NavBar";
const DesktopNavBar = () => {
    return (
        <Stack
            color={"brand.200"}
            direction={"row"}
            display={{ base: "none", lg: "flex" }}
            spacing={8}
        >
            <NavBar />
        </Stack>
    );
};

export default DesktopNavBar;
