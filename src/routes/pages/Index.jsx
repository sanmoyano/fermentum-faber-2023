import React from "react";
import { Outlet } from "react-router-dom";

const Index = ({ children }) => {
    return (
        <>
            {children}
            <Outlet />
        </>
    );
};

export default Index;
