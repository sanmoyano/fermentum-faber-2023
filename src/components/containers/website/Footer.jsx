import { Stack, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Stack
            alignItems={"center"}
            bgColor={"brand.500"}
            justifyContent={"center"}
            p={6}
            width={"100%"}
        >
            <Text textAlign={"center"} textStyle={"body"}>
                2021 - Fermentum Faber, Córdoba Argentina. Todos los derechos reservados. Disfrutar
                responsablemente. Prohibida su venta a menores de 18 años.
            </Text>
        </Stack>
    );
};

export default Footer;
