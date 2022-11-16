import { createBrowserRouter, Route } from "react-router-dom";

import { Home } from "./routes/";
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
        ],
    },
]);

export default router;
