import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
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
            <Grid
                gap={6}
                gridTemplateColumns={"repeat(auto-fit, minmax(320px, 1fr))"}
                justifyContent={"center"}
                paddingBlock={10}
                paddingInline={24}
            >
                {zona.bares?.map((bar, i) => (
                    <GridItem
                        key={i}
                        as={motion.div}
                        height={"auto"}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Box borderRadius={6} height={"450px"}>
                            <Image
                                alt={bar.name}
                                borderRadius={6}
                                boxSize={"100%"}
                                objectFit={"cover"}
                                src={bar.img}
                            />
                        </Box>
                        <Stack height={"200px"} paddingBlock={2}>
                            <Text color={"brand.500"} textStyle={"itemTitle"}>
                                {bar.name}
                            </Text>
                            {/* <Text>{bar.description}</Text> */}
                            <Stack spacing={0}>
                                <Text color={"brand.500"} textStyle={"heading"}>
                                    {bar.direction}
                                </Text>
                                <Text color={"brand.500"} textStyle={"heading"}>
                                    instagram {bar.ig}
                                </Text>
                            </Stack>
                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    );
};

export default BarItem;
