import React from 'react';
import { motion } from 'framer-motion';

// Slide-up + fade-in for the header block on mount.
// Uses a custom cubic-bezier (easeOutQuart) for a snappy but smooth feel.
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const AlumniHeader: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={headerVariants}>
      <h2>Meet Our Alumni</h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        They&apos;ve gone on to bigger things.
      </motion.p>
    </motion.div>
  );
};

export default AlumniHeader;
