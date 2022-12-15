import { createBrowserRouter } from "react-router-dom";

import { Home, Beers, Services, Where, Us } from "./routes/";
import Root from "./routes/Root";

const router = createBrowserRouter([
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

export default router;
