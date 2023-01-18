import { Stack, Text } from "@chakra-ui/react";

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
                overflow={"hidden"}
                position={"relative"}
                role={"group"}
                width={"100%"}
            >
                <Stack
                    _groupHover={{ right: "0%" }}
                    backdropBlur={1}
                    bgColor={"rgba(0,0,0,.9)"}
                    borderRadius={6}
                    height={"100%"}
                    justifyContent={"center"}
                    p={4}
                    position={"absolute"}
                    right={"-100%"}
                    transition={"1s"}
                    width={"100%"}
                >
                    <Text color={"brand.200"} textAlign={"center"} textStyle={"heading"}>
                        {description}
                    </Text>
                </Stack>
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
