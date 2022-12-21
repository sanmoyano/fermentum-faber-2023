import { Box, Image, Stack, Text } from "@chakra-ui/react";

const ItemGrid = ({ img, title, description }) => {
    return (
        <Stack alignItems={"center"} height={"100%"} justifyContent={"center"}>
            <Stack
                alignItems={"center"}
                bgImage={img}
                bgPosition={"center"}
                bgSize={"cover"}
                borderRadius={6}
                height={"100%"}
                justifyContent={"center"}
                p={4}
            >
                <Text color={"brand.200"} textAlign={"center"} textStyle={"heading"}>
                    {description}
                </Text>
            </Stack>
            <Text
                color={"brand.500"}
                textAlign={"center"}
                textStyle={"heading"}
                textTransform={"uppercase"}
            >
                {title}
            </Text>
        </Stack>
    );
};

export default ItemGrid;
