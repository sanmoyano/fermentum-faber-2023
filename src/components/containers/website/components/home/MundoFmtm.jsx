import { Stack, Text, Grid, GridItem } from "@chakra-ui/react";

const MundoFmtm = () => {
    return (
        <Stack p={24}>
            <Grid gap={"50px"} gridTemplateColumns={"repeat(auto-fit, minmax(320px, 1fr))"}>
                <GridItem height={"400px"}>
                    <Text>HOLA</Text>
                </GridItem>
                <GridItem>
                    <Text>HOLA</Text>
                </GridItem>
                <GridItem>
                    <Text>HOLA</Text>
                </GridItem>{" "}
                <GridItem height={"320px"}>
                    <Text>HOLA</Text>
                </GridItem>
                <GridItem>
                    <Text>HOLA</Text>
                </GridItem>
                <GridItem>
                    <Text>HOLA</Text>
                </GridItem>
            </Grid>
        </Stack>
    );
};

export default MundoFmtm;
