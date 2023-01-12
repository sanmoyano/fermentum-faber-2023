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
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F01_golden.png?alt=media&token=b8a7439a-72f6-4d9e-a2a7-5f21340b3546",
        },
        {
            title: "Scotch",
            description:
                " Maltosa, predominan las notas caramelo jy tostadas. El lúpulo se utiliza solo para contrarrestar el dulzor de las maltas. Se siente liviana y levemente seca.",
            ibu: "18",
            abv: "4.6%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F02_scotch.jpg?alt=media&token=6bda4913-d0f6-42a7-843a-08c452f60955",
        },
        {
            title: "Strong Ale",
            description:
                "Se caracteriza por su cantidad de maltas, cuerpo y contenido alcohólico. Se combinan ésteres frutados de su fermentación con caramelos de maltas especiales.",
            ibu: "24",
            abv: "7.4%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F03_strong.png?alt=media&token=2bb8c116-399a-4403-bc06-3865b4d575a4",
        },
        {
            title: "APA",
            description:
                "Lupulada tanto en hervor como en fermentación (dry hop). Ligeras maltas caramelo aportan el balance necesario. Notas cítricas y frutales en sabor y aroma. Amargor moderado.",
            ibu: "28",
            abv: "5.5%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F04_apa.jpg?alt=media&token=de88eac8-4aaa-4ed8-a4f7-54bae1372e08",
        },
        {
            title: "AAA",
            description:
                "Combina intensas notas caramelo de sus maltas con las notas frutadas de sus lúpulos. Amargor moderado.",
            ibu: "26",
            abv: "5.5%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F05_aaa.png?alt=media&token=956c8fe4-a825-4ff3-8e77-edb33707646d",
        },
        {
            title: "Session IPA",
            description:
                "Versión de IPA super liviana, de baja graduación alcohólica y muy refrescante. Se pueden percibir lúpulos frutados y cítricos junto a un amargor amigable.",
            ibu: "32",
            abv: "4.0%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F06_session.jpg?alt=media&token=0e76b778-d468-4010-ae4b-da291044f440",
        },
        {
            title: "Caramel IPA",
            description:
                "IPA de buen cuerpo y graduación alcohólica. Su gran cantidad de maltas caramelo y lúpulos frutados logran notas similares a los frutos rojos.",
            ibu: "52",
            abv: "6.0%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F07_caramel.jpg?alt=media&token=d43a794f-f294-4a66-b52b-8f0b41d7da31",
        },
        {
            title: "American IPA",
            description:
                "Una IPA con cuerpo, buena graduación alcohólica y equilibrada. Amargor intenso sin asperezas. Grandes cantidades de lúpulo aportan notas tropicales en sabor y aroma.",
            ibu: "54",
            abv: "6.5%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F08_american.JPG?alt=media&token=820a3ac2-1a8f-412f-8cb9-0c4c9f2398f1",
        },
        {
            title: "Juicy IPA",
            description:
                "Versión de IPA con una abundante cantidad de lúpulo en adiciones tardías. Explotan las notas tropicales, mango, piña y maracuyá. Nuevas levaduras, trigo y avena completan su apariencia final.",
            ibu: "30",
            abv: "6.0%",
            img: "https://firebasestorage.googleapis.com/v0/b/fermentumfabercervezas.appspot.com/o/2023%2F09_juicy.png?alt=media&token=b2a75e21-12ae-4a70-9ea1-d0dd68476720",
        },
    ];

    return (
        <Grid
            gap={10}
            gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
            justifyContent={"center"}
            p={{ base: 6, md: 24 }}
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
