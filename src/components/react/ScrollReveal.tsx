import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variants,
  delay = 0,
  className,
  staggerChildren = 0,
}) => {
  // Default variant: slides up 50px and fades in.
  // `delay` and `staggerChildren` are injected from props so callers can
  // offset multiple ScrollReveal instances on the same page (e.g. the image
  // and text columns on the homepage appear 200 ms apart).
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants ?? defaultVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
