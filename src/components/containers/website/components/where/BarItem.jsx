import { Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BarItem = ({ zona }) => {
    return (
        <Stack
            animate={{ opacity: 1 }}
            as={motion.div}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
        >
            <Stack
                alignItems={"center"}
                bgGradient={"linear(to-r, brand.100, brand.300)"}
                height={"80px"}
                justifyContent={"center"}
                p={2}
            >
                <Text fontWeight={"bold"} textStyle={"subHeading"}>
                    {zona.name}
                </Text>
            </Stack>
            <Stack>Grid bares</Stack>
        </Stack>
    );
};

export default BarItem;
