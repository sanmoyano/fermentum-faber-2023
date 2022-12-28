import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import { WhereHero, WhereList } from "./website";
const WhereLayout = () => {
    return (
        <>
            <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
                <WhereHero />
                <WhereList />
                <Outlet />
            </motion.div>
        </>
    );
};

export default WhereLayout;
