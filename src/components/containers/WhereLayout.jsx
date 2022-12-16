import { motion } from "framer-motion";

import { WhereHero } from "./website";
const WhereLayout = () => {
    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <WhereHero />
        </motion.div>
    );
};

export default WhereLayout;
