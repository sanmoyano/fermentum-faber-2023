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
            img: "../../../../../assets/images/01_golden.png",
        },
        {
            title: "Scotch",
            description:
                " Maltosa, predominan las notas caramelo jy tostadas. El lúpulo se utiliza solo para contrarrestar el dulzor de las maltas. Se siente liviana y levemente seca.",
            ibu: "18",
            abv: "4.6%",
            img: "../../../../../assets/images/02_scotch.jpg",
        },
        {
            title: "Strong Ale",
            description:
                "Se caracteriza por su cantidad de maltas, cuerpo y contenido alcohólico. Se combinan ésteres frutados de su fermentación con caramelos de maltas especiales.",
            ibu: "24",
            abv: "7.4%",
            img: "../../../../../assets/images/03_strong.png",
        },
        {
            title: "APA",
            description:
                "Lupulada tanto en hervor como en fermentación (dry hop). Ligeras maltas caramelo aportan el balance necesario. Notas cítricas y frutales en sabor y aroma. Amargor moderado.",
            ibu: "28",
            abv: "5.5%",
            img: "../../../../../assets/images/04_apa.jpg",
        },
        {
            title: "AAA",
            description:
                "Combina intensas notas caramelo de sus maltas con las notas frutadas de sus lúpulos. Amargor moderado.",
            ibu: "26",
            abv: "5.5%",
            img: "../../../../../assets/images/05_aaa.png",
        },
        {
            title: "Session IPA",
            description:
                "Versión de IPA super liviana, de baja graduación alcohólica y muy refrescante. Se pueden percibir lúpulos frutados y cítricos junto a un amargor amigable.",
            ibu: "32",
            abv: "4.0%",
            img: "../../../../../assets/images/06_session.jpg",
        },
        {
            title: "Caramel IPA",
            description:
                "IPA de buen cuerpo y graduación alcohólica. Su gran cantidad de maltas caramelo y lúpulos frutados logran notas similares a los frutos rojos.",
            ibu: "52",
            abv: "6.0%",
            img: "../../../../../assets/images/07_caramel.jpg",
        },
        {
            title: "American IPA",
            description:
                "Una IPA con cuerpo, buena graduación alcohólica y equilibrada. Amargor intenso sin asperezas. Grandes cantidades de lúpulo aportan notas tropicales en sabor y aroma.",
            ibu: "54",
            abv: "6.5%",
            img: "../../../../../assets/images/08_american.jpg",
        },
        {
            title: "Juicy IPA",
            description:
                "Versión de IPA con una abundante cantidad de lúpulo en adiciones tardías. Explotan las notas tropicales, mango, piña y maracuyá. Nuevas levaduras, trigo y avena completan su apariencia final.",
            ibu: "30",
            abv: "6.0%",
            img: "../../../../../assets/images/09_juicy.png",
        },
    ];

    return (
        <Grid
            gap={6}
            gridTemplateColumns={"repeat(auto-fit, minmax(320px, 1fr))"}
            justifyContent={"center"}
            p={24}
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
                    <Stack height={"200px"} paddingBlock={2}>
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
