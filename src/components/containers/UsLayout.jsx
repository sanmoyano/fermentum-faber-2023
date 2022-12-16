import { motion } from "framer-motion";

import { UsHero, UsList } from "./website";
const UsLayout = () => {
    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <UsHero />
            <UsList />
        </motion.div>
    );
};

export default UsLayout;
