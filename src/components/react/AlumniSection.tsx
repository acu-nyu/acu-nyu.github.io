import React from 'react';
import { motion, type Variants } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';

// Animation variants — identical to original Gatsby Alumni.js
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface AlumniMember {
  name: string;
  role?: string;
  imageSrc?: string;
  linkedinUrl?: string;
}

interface AlumniSectionProps {
  year: string;
  members: AlumniMember[];
}

const AlumniSection: React.FC<AlumniSectionProps> = ({ year, members }) => {
  return (
    <motion.div
      id={year.replace(/\s+/g, '-')}
      className="mb-24 scroll-mt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <div className="flex items-center gap-6 mb-8 md:mb-12 justify-center">
        <h2 className="section-header text-xl md:text-3xl lg:text-5xl font-black tracking-tight uppercase m-0 drop-shadow-sm text-center text-slate-900">
          {year}
          <motion.div
            className="h-1 w-12 bg-red-600 mt-2 rounded-full mx-auto shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {members.map((member, i) => (
          <motion.div key={i} variants={cardVariants}>
            <TeamMemberCard
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              isAlumni={true}
              linkedinUrl={member.linkedinUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AlumniSection;
