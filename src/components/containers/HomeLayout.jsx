import { motion } from "framer-motion";

import { HomeHero, MundoFmtm } from "./website";

const HomeLayout = () => {
    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <HomeHero />
            <MundoFmtm />
        </motion.div>
    );
};

export default HomeLayout;
