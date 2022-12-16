import { motion } from "framer-motion";

import { BeersHero, BeerList } from "./website";

const BeerLayout = () => {
    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <BeersHero />
            <BeerList />
        </motion.div>
    );
};

export default BeerLayout;
