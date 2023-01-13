import { Stack, Text, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
const bgColor = {
    background: `linear-gradient(to top left, rgba(146, 79, 158), rgba(255, 255, 255, 0),rgba(189, 214, 48)), linear-gradient(to top right, rgba(23,189,245), rgba(255, 255, 255, 0), rgba(33,79,118)) rgba(95, 134, 155, 1)`,
};
const Form = () => {
    return (
        <Stack
            alignItems={"flex-start"}
            {...bgColor}
            d
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            paddingBlock={10}
            paddingInline={{ base: 6, lg: 24 }}
            spacing={10}
            width={"100%"}
        >
            <Stack
                padding={{ base: 6, md: "none" }}
                spacing={4}
                width={{ base: "100%", lg: "25%" }}
            >
                <Text fontWeight={"700"} textStyle={"subHeading"}>
                    contacto
                </Text>
                <Text color={"brand.200"} fontFamily={"Acumin-Pro"}>
                    *Si te interesa vender nuestros productos contacte al{" "}
                    <Link href={"https://wa.me/3513713106"}>
                        <strong>(351)371-3106</strong>
                    </Link>
                </Text>
                <Text color={"brand.200"} fontFamily={"Acumin-Pro"}>
                    *Si te interesa vender nuestros productos contacte al{" "}
                    <Link href={"https://wa.me/3513713106"}>
                        <strong>(351)371-3106</strong>
                    </Link>
                </Text>
            </Stack>
            <Stack padding={{ base: 6, md: "none" }} spacing={6}>
                <Text fontWeight={"700"} textStyle={"subHeading"}>
                    Horarios
                </Text>
                <Stack spacing={4}>
                    <Stack color={"brand.200"} spacing={0}>
                        <Text textStyle={"title"}>lunes a viernes</Text>
                        <Text fontFamily={"Acumin-Pro"}>09hs - 19hs.</Text>
                    </Stack>
                    <Stack color={"brand.200"} spacing={0}>
                        <Text textStyle={"title"}>sabados y domingos</Text>
                        <Text fontFamily={"Acumin-Pro"}>CERRADO</Text>
                    </Stack>
                    <Stack color={"brand.200"} spacing={0}>
                        <Text textStyle={"title"}>envios y takeaway de lunes a viernes</Text>
                        <Text fontFamily={"Acumin-Pro"}>
                            En la Ciudad de Córdoba de 09hs a 19hs.
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack padding={{ base: 6, md: "none" }} spacing={4}>
                <Text fontWeight={"700"} textStyle={"subHeading"}>
                    Econtranos
                </Text>
                <Stack color={"brand.200"} spacing={0}>
                    <Text textStyle={"title"}>Cordoba</Text>
                    <Text fontFamily={"Acumin-Pro"}>Ciudad de Córdoba</Text>
                </Stack>
            </Stack>
            <Stack padding={{ base: 6, md: "none" }} spacing={4}>
                <Text fontWeight={"700"} textStyle={"subHeading"}>
                    Redes
                </Text>
                <Stack color={"brand.200"} spacing={2}>
                    <Link
                        href="https://www.instagram.com/fermentumcerveza/?theme=dark"
                        target={"_blank"}
                    >
                        <Stack alignItems={"center"} direction={"row"}>
                            <Icon as={FaInstagram} h={"25px"} w={"25px"} />
                            <Text fontFamily={"Acumin-Pro"}>/fermentumcerveza</Text>
                        </Stack>
                    </Link>
                    <Link href="https://www.facebook.com/fermentumcerveza" target={"_blank"}>
                        <Stack alignItems={"center"} direction={"row"}>
                            <Icon as={FaFacebookF} h={"25px"} w={"25px"} />
                            <Text fontFamily={"Acumin-Pro"}>/fermentumcerveza</Text>
                        </Stack>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Form;
