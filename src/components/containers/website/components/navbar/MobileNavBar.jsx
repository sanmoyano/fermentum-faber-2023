import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Stack } from "@chakra-ui/react";

import NavBar from "./NavBar";
import MenuToggle from "./MenuToggle";

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useCycle(false, true);

    const variants = {
        open: { opacity: 1, x: "0" },
        closed: { opacity: 0, x: "-100%" },
    };

    return (
        <Stack display={{ base: "flex", lg: "none" }}>
            <MenuToggle open={isOpen} toggle={() => setIsOpen()} />
            <AnimatePresence>
                <Stack
                    alignItems={"center"}
                    animate={isOpen ? "open" : "closed"}
                    as={motion.div}
                    bgColor={"brand.500"}
                    height={"100vh"}
                    justifyContent={"flex-start"}
                    p={6}
                    position={"absolute"}
                    right={"0px"}
                    spacing={24}
                    top={"85px"}
                    variants={variants}
                    width={"100%"}
                    zIndex={10}
                >
                    <Stack alignItems={"center"} color={"brand.200"} spacing={8}>
                        <NavBar />
                    </Stack>
                </Stack>
            </AnimatePresence>
        </Stack>
    );
};

export default MobileNavBar;
