import { Box, Button, Grid, GridItem, Image, Link, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMap, FaMapMarker } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

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
                gap={10}
                gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
                justifyContent={"center"}
                padding={{ base: 6, md: 32 }}
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
                        <Stack paddingBlock={2}>
                            <Text color={"brand.500"} textStyle={"itemTitle"}>
                                {bar.name}
                            </Text>
                            <Stack spacing={2}>
                                <Stack direction={"row"}>
                                    {<FaMapMarker />}
                                    <Link href={bar.map} target={"_blank"}>
                                        <Text color={"brand.500"} textStyle={"heading"}>
                                            {bar.direction}
                                        </Text>
                                    </Link>
                                </Stack>
                                <Stack alignItems={"center"} direction={"row"}>
                                    {<FiInstagram />}
                                    <Link href={bar.igLink} target={"_blank"}>
                                        <Text color={"brand.500"} textStyle={"heading"}>
                                            {bar.ig}
                                        </Text>
                                    </Link>
                                </Stack>
                                <Button leftIcon={<FaMap />} variant={"black"} width={"150px"}>
                                    <Link
                                        _hover={{ textDecoration: "none" }}
                                        href={bar.map}
                                        target={"_blank"}
                                    >
                                        Ver en mapa
                                    </Link>
                                </Button>
                            </Stack>
                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    );
};

export default BarItem;
