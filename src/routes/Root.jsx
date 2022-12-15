import { Outlet } from "react-router-dom";

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
