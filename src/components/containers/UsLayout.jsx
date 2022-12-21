import { motion } from "framer-motion";

import { UsHero, UsList, UsText } from "./website";
const UsLayout = () => {
    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <UsHero />
            <UsList />
            <UsText />
        </motion.div>
    );
};

export default UsLayout;
