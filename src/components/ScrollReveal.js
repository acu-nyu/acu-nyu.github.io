import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, variants, delay = 0, className, staggerChildren = 0 }) => {
    const defaultVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: delay,
                staggerChildren: staggerChildren
            }
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants || defaultVariants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
