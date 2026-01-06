import React from 'react';
import { motion } from 'framer-motion';

const TeamHeader = () => {
  return (
    <section className="py-20 px-4 text-center relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="inline-block relative mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase relative z-10">
            Meet the E-Board
          </h2>
          <motion.div 
            className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full transform scale-x-75"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.75 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>

        <motion.p 
          className="text-sm md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Eboard Applications are currently closed. Check back in January/February 2026 for Spring Eboard Applications!
        </motion.p>
      </div>

      {/* Radial gradient background - seamless edges */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(127,29,29,0.25)_0%,_transparent_70%)]" />
      </div>
    </section>
  );
};

export default TeamHeader;
