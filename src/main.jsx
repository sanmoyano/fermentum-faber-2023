import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import Router from "./router";
import "./fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>,
);
