import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ItemGrid, ChakraLink } from "../decorators";

const ListContainer = ({ title, itemArray }) => {
    return (
        <Stack justifyContent={"center"} p={24} spacing={6}>
            <Text color={"brand.500"} textAlign={"center"} textStyle={"itemTitle"}>
                {title}
            </Text>
            <Grid
                gap={"25px"}
                gridTemplateColumns={"repeat(auto-fit, minmax(320px, 320px))"}
                justifyContent={"center"}
            >
                {itemArray?.map((item, i) => (
                    <GridItem key={i} height={"300px"}>
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
