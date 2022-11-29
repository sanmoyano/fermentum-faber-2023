import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StackBackgroundInfo = ({ title, info }) => {
    return (
        <Stack alignItems={"center"} direction={"column"} spacing={2}>
            <Heading
                color={"brand.200"}
                fontFamily={"Acumin-Pro-Bold-Italic"}
                size={"4xl"}
                textTransform={"uppercase"}
            >
                {title}
            </Heading>
            <Stack
                alignItems={"center"}
                justifyContent={"center"}
                lineHeight={1}
                textAlign={"center"}
                textStyle={"heading"}
                width={"450px"}
            >
                <Text>{info}</Text>
            </Stack>
        </Stack>
    );
};

export default StackBackgroundInfo;
