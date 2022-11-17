import { Outlet, Link } from "react-router-dom";
import { Stack, Text, Textarea } from "@chakra-ui/react";

import { Header, Form, Footer } from "../components/containers/website";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Form />
            <Footer />
        </>
    );
}
