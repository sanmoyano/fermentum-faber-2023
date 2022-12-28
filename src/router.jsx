import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation, useRoutes } from "react-router-dom";

import { Home, Beers, Services, Where, Us } from "./routes/";
import Root from "./routes/Root";

const router = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Root />,
            errorElement: "",
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/cervezas",
                    element: <Beers />,
                },
                {
                    path: "/servicios",
                    element: <Services />,
                },
                {
                    path: "/donde",
                    element: <Where />,
                },
                {
                    path: "/nosotros",
                    element: <Us />,
                },
            ],
        },
    ]);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    if (!element) return null;

    return (
        <AnimatePresence mode="wait">
            {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    );
};

export default router;
