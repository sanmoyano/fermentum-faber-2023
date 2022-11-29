import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StackBackgroundInfo = ({ title, where, services, beers, us }) => {
    return (
        <Stack alignItems={"center"} direction={"column"} spacing={4}>
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
                spacing={4}
                textAlign={"center"}
                textStyle={"heading"}
                width={"450px"}
            >
                <Text>{where}</Text>
                <Text>{services}</Text>
                <Text>{beers}</Text>
                <Text>{us}</Text>
            </Stack>
        </Stack>
    );
};

export default StackBackgroundInfo;
