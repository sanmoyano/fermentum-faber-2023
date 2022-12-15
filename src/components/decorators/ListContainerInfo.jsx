import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";

import { ItemGrid } from "../decorators";

const ListContainerInfo = ({ itemArray }) => {
    return (
        <Stack justifyContent={"center"} p={24} spacing={6}>
            <Grid
                gap={"25px"}
                gridTemplateColumns={"repeat(auto-fit, minmax(320px, 320px))"}
                justifyContent={"center"}
            >
                {itemArray?.map((item, i) => (
                    <GridItem key={i} height={"300px"}>
                        <ItemGrid
                            description={item.description}
                            img={item.img}
                            title={item.title}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Stack>
    );
};

export default ListContainerInfo;
