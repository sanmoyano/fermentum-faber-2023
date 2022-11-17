import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme(theme, {
    style: {
        global: {
            "html, body, #root": {
                heigth: "100%",
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                fontSize: "62.5%",
            },
        },
    },
    colors: {
        brand: {
            100: "#BDD630",
            200: "#f5f5f5",
            300: "#214F76",
            400: "#924F9E",
            500: "#0d0d0d",
            600: "#17BDF5",
        },
    },
    components: {
        Button: {
            variants: {
                white: {
                    bg: "brand.200",
                    color: "brand.500",
                },
                black: {
                    bg: "brand.500",
                    color: "brand.200",
                },
            },
        },
    },
});
