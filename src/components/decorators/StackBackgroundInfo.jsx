import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StackBackgroundInfo = ({ title, info }) => {
    return (
        <Stack alignItems={"center"} direction={"column"} lineHeight={1} p={4} spacing={2}>
            <Heading
                color={"brand.200"}
                fontFamily={"Acumin-Pro-Bold-Italic"}
                size={{ base: "2xl", lg: "4xl" }}
                textAlign={"center"}
                textTransform={"uppercase"}
            >
                {title}
            </Heading>
            <Stack
                alignItems={"center"}
                justifyContent={"center"}
                lineHeight={1}
                p={2}
                textAlign={"center"}
                textStyle={"heading"}
                width={{ base: "auto", lg: "450px" }}
            >
                <Text>{info}</Text>
            </Stack>
        </Stack>
    );
};

export default StackBackgroundInfo;
