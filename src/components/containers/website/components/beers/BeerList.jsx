import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const BeerList = () => {
    const beers = [
        {
            title: "Golden",
            description:
                "Rubia clásica. Liviana, suave y redonda. Se caracteriza por su perfil de maltas base, una fermentación limpia y un lupulado ligero que aporta bajo amargor y una sensación fresca.",
            ibu: "16",
            abv: "4.6%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F01_golden.png?alt=media&token=fed361e8-db9b-4f2d-b8a6-7e985d5b2fda",
        },
        {
            title: "Scotch",
            description:
                " Maltosa, predominan las notas caramelo jy tostadas. El lúpulo se utiliza solo para contrarrestar el dulzor de las maltas. Se siente liviana y levemente seca.",
            ibu: "18",
            abv: "4.6%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F02_scotch.jpg?alt=media&token=4c4a9430-33b7-4c9c-9c09-0f182f707b07",
        },
        {
            title: "Strong Ale",
            description:
                "Se caracteriza por su cantidad de maltas, cuerpo y contenido alcohólico. Se combinan ésteres frutados de su fermentación con caramelos de maltas especiales.",
            ibu: "24",
            abv: "7.4%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F03_strong.png?alt=media&token=d3d78464-46a9-4052-b535-1b97f1985892",
        },
        {
            title: "APA",
            description:
                "Lupulada tanto en hervor como en fermentación (dry hop). Ligeras maltas caramelo aportan el balance necesario. Notas cítricas y frutales en sabor y aroma. Amargor moderado.",
            ibu: "28",
            abv: "5.5%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F04_apa.jpg?alt=media&token=9f1c8540-5eb6-41bf-a58f-45b61830ba8f",
        },
        {
            title: "AAA",
            description:
                "Combina intensas notas caramelo de sus maltas con las notas frutadas de sus lúpulos. Amargor moderado.",
            ibu: "26",
            abv: "5.5%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F05_aaa.png?alt=media&token=ef2c3c04-4e8a-48b5-8bea-8a3c933c36f1",
        },
        {
            title: "Session IPA",
            description:
                "Versión de IPA super liviana, de baja graduación alcohólica y muy refrescante. Se pueden percibir lúpulos frutados y cítricos junto a un amargor amigable.",
            ibu: "32",
            abv: "4.0%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F06_session.jpg?alt=media&token=59b7a795-c460-446e-8aa4-059f0ee4d2f1",
        },
        {
            title: "Caramel IPA",
            description:
                "IPA de buen cuerpo y graduación alcohólica. Su gran cantidad de maltas caramelo y lúpulos frutados logran notas similares a los frutos rojos.",
            ibu: "52",
            abv: "6.0%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F07_caramel.jpg?alt=media&token=c685ad95-499c-4052-b4cc-97f2e6513772",
        },
        {
            title: "American IPA",
            description:
                "Una IPA con cuerpo, buena graduación alcohólica y equilibrada. Amargor intenso sin asperezas. Grandes cantidades de lúpulo aportan notas tropicales en sabor y aroma.",
            ibu: "54",
            abv: "6.5%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F08_american.png?alt=media&token=684cb52a-4b35-4516-8e8c-44183bbf0842",
        },
        {
            title: "Juicy IPA",
            description:
                "Versión de IPA con una abundante cantidad de lúpulo en adiciones tardías. Explotan las notas tropicales, mango, piña y maracuyá. Nuevas levaduras, trigo y avena completan su apariencia final.",
            ibu: "30",
            abv: "6.0%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2Fcervezas%2F09_juicy.png?alt=media&token=a8fd6c69-8257-4240-8493-926471b84bcc",
        },
    ];

    return (
        <Grid
            gap={10}
            gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
            justifyContent={"center"}
            p={{ base: 6, md: 32 }}
        >
            {beers.map((item, i) => (
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
                            alt={item.title}
                            borderRadius={6}
                            boxSize={"100%"}
                            objectFit={"cover"}
                            src={item.img}
                        />
                    </Box>
                    <Stack paddingBlock={2}>
                        <Text color={"brand.500"} textStyle={"itemTitle"}>
                            {item.title}
                        </Text>
                        <Text>{item.description}</Text>
                        <Stack spacing={0}>
                            <Text color={"brand.500"} textStyle={"heading"}>
                                IBU: {item.ibu}
                            </Text>
                            <Text color={"brand.500"} textStyle={"heading"}>
                                ABV: {item.abv}
                            </Text>
                        </Stack>
                    </Stack>
                </GridItem>
            ))}
        </Grid>
    );
};

export default BeerList;
