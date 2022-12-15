import { Stack, Text } from "@chakra-ui/react";

const ItemGrid = ({ img, title, description }) => {
    return (
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
            <Text
                color={"brand.500"}
                textAlign={"center"}
                textDecoration={"none"}
                textStyle={"heading"}
            >
                {title}
            </Text>
            <Text textAlign={"center"}>{description}</Text>
        </Stack>
    );
};

export default ItemGrid;
