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
});
