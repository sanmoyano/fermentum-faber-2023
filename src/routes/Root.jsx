import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
