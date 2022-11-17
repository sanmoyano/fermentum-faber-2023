import { Stack, Text } from "@chakra-ui/react";

import { StackBackground } from "../../../../decorators";
const HomeHero = () => {
    return (
        <StackBackground bgImage={"portada_home"}>
            <Stack>
                <Text>TITULO</Text>
                <Text>TITULO</Text>
                <Text>TITULO</Text>
                <Text>TITULO</Text>
            </Stack>
        </StackBackground>
    );
};

export default HomeHero;
