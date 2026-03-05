import React from 'react';
import { motion } from 'framer-motion';

const TeamHeader = () => {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      {/* Floating background elements for a more creative/dynamic feel */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 md:left-32 text-4xl md:text-5xl opacity-40 pointer-events-none select-none drop-shadow-sm hidden sm:block"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-12 right-10 md:right-32 text-4xl md:text-5xl opacity-30 pointer-events-none select-none drop-shadow-sm hidden sm:block"
      >
        🍂
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      ></motion.div>

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
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-red-100 text-red-600 text-sm md:text-base font-semibold shadow-sm transform transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              Applications open in September
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Our E-Board applications are currently <strong className="font-bold text-slate-700">closed</strong>. We are excited for the upcoming semester and look forward to welcoming new faces to the team in the fall!
        </motion.p>
      </div>

      {/* Radial gradient background - seamless soft edges */}
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(127,29,29,0.12) 0%, rgba(127,29,29,0.06) 30%, rgba(127,29,29,0.01) 50%, transparent 70%)',
        }}
      />
    </section>
  );
};

export default TeamHeader;
