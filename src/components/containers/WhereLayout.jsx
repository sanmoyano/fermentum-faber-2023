import { motion } from "framer-motion";
import { Outlet, Route, Routes } from "react-router-dom";

import { GralPaz } from "../../routes";

import { WhereHero, WhereList } from "./website";
const WhereLayout = () => {
    return (
        <>
            <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
                <WhereHero />
                <WhereList />
                <Routes>
                    <Route element={<GralPaz />} path={"general-paz"} />
                </Routes>
            </motion.div>
        </>
    );
};

export default WhereLayout;
