import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StackBackgroundInfo = ({ title, where, services, beers }) => {
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
            <Stack alignItems={"center"} justifyContent={"center"} width={"350px"}>
                <Text textAlign={"center"} textStyle={"heading"}>
                    {where}
                </Text>
                <Text textAlign={"center"} textStyle={"heading"}>
                    {services}
                </Text>
                <Text textAlign={"center"} textStyle={"heading"}>
                    {beers}
                </Text>
            </Stack>
        </Stack>
    );
};

export default StackBackgroundInfo;
