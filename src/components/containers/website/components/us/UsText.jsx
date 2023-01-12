import { Box, Image, Stack, Text } from "@chakra-ui/react";

const UsText = () => {
    return (
        <Stack
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={24}
            paddingInline={{ base: 6, lg: 24 }}
            spacing={12}
        >
            <Text
                color={"brand.500"}
                textAlign={"justify"}
                textStyle={"heading"}
                textTransform={"uppercase"}
                width={{ base: "atuo", lg: "400px" }}
            >
                Fermentum Faber nace con la idea de generar un espacio de calidad en la producción
                de cerveza. Calidad que implica una verdadera puesta en acción de un trabajo en
                equipo basado en el conocimiento, la confianza y una buena comunicación. Desde sus
                orígenes, Fermentum Faber busca la mejora continua en equipamientos y procesos
                productivos para alcanzar la calidad deseada. <br /> <br />
                Esto implica responsabilidad en la construcción de una cultura cervecera regional
                que permita al consumidor valorar un producto de calidad. Ofrecemos un compromiso
                continuo en la relación con el cliente para garantizar que las personas que elijan
                nuestra cerveza vivan una experiencia agradable, superadora y mejor si es en buena
                compañía.
            </Text>
            <Box sx={{ width: { base: "300px", lg: "400px" } }}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Flogotipo_horizontal_b.svg?alt=media&token=10ee43d9-c16a-4652-b152-abbab7fe3ae2" />
            </Box>
        </Stack>
    );
};

export default UsText;
