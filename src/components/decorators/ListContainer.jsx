import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
                {itemArray.map((item, i) => (
                    <Link key={i} to={item.route}>
                        <GridItem height={"320px"}>
                            <Stack
                                alignItems={"center"}
                                bgColor={"brand.100"}
                                bgImage={item.img}
                                borderRadius={6}
                                height={"100%"}
                                justifyContent={"center"}
                            >
                                <Text
                                    color={"brand.500"}
                                    textAlign={"center"}
                                    textStyle={"heading"}
                                >
                                    {item.title}
                                </Text>
                            </Stack>
                        </GridItem>
                    </Link>
                ))}
            </Grid>
        </Stack>
    );
};

export default ListContainer;
