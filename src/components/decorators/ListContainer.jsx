/* eslint-disable prettier/prettier */
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

import { ItemGrid, ChakraLink } from "../decorators";

const ListContainer = ({ title, itemArray }) => {
    return (
        <Stack justifyContent={"center"} p={{base:6, lg:32}} spacing={6}>
            <Text color={"brand.500"} textAlign={"center"} textStyle={"itemTitle"}>
                {title}
            </Text>
            <Grid
                gap={"25px"}
                gridTemplateColumns={"repeat(auto-fit, minmax(300px, 300px))"}
                justifyContent={"center"}
            >
                    { itemArray?.map((item, i) => (
                            <GridItem key={i} as={motion.div}        
                                height={"300px"}
                                initial={{ opacity: 0 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1 }}
                            >
                                {item.route.startsWith("https") ? (
                                    <ChakraLink link={item.route}>
                                        <ItemGrid img={item.img} title={item.title} />
                                    </ChakraLink>
                                ) : (
                                    <Link to={item.route}>
                                        <ItemGrid img={item.img} title={item.title} />
                                    </Link>
                                )}
                            </GridItem>
                        ))}
            </Grid>
        </Stack>
    );
};

export default ListContainer;
