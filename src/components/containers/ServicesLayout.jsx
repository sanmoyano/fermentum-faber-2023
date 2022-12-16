import { motion } from "framer-motion";

import { ServicesHero, ServicesList } from "./website";
const ServicesLayout = () => {
    return (
        <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
            <ServicesHero />
            <ServicesList />
        </motion.div>
    );
};

export default ServicesLayout;
