import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ItemGrid } from "../decorators";

const ListContainerInfo = ({ itemArray }) => {
    return (
        <Stack justifyContent={"center"} p={{ base: 6, lg: 32 }} spacing={6}>
            <Grid
                gap={"25px"}
                gridTemplateColumns={"repeat(auto-fit, minmax(300px, 300px))"}
                justifyContent={"center"}
            >
                {itemArray?.map((item, i) => (
                    <GridItem
                        key={i}
                        as={motion.div}
                        height={"300px"}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                    >
                        {item?.description ? (
                            <ItemGrid
                                description={item.description}
                                img={item.img}
                                title={item.title}
                            />
                        ) : (
                            <ItemGrid img={item.img} title={item.title} />
                        )}
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    );
};

export default ListContainerInfo;
