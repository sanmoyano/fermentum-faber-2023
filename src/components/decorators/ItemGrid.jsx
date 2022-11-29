import { Stack, Text } from "@chakra-ui/react";

const ItemGrid = ({ img, title }) => {
    return (
        <Stack
            alignItems={"center"}
            bgColor={"brand.100"}
            bgImage={img}
            borderRadius={6}
            height={"100%"}
            justifyContent={"center"}
        >
            <Text
                color={"brand.500"}
                textAlign={"center"}
                textDecoration={"none"}
                textStyle={"heading"}
            >
                {title}
            </Text>
        </Stack>
    );
};

export default ItemGrid;
