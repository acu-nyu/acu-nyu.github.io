import React from 'react';
import { motion, type Variants } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';

// Animation variants — identical to original Gatsby Team.js
//
// sectionVariants: slides the entire section up 40px and fades in when it
//   enters the viewport.  easeOutQuart cubic-bezier gives a snappy deceleration.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// containerVariants: wraps the grid of cards.  Does not animate itself —
//   just orchestrates child staggering (80 ms between each card, 100 ms
//   initial delay so the section header has time to appear first).
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

// cardVariants: each member card slides up 30px, fades in, and scales from
//   95 % → 100 %.  Combined with the stagger above this creates a cascading
//   reveal effect across the grid.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

interface Member {
  name: string;
  role?: string;
  imageSrc?: string;
  description?: string;
  linkedinUrl?: string;
}

interface TeamSectionProps {
  title: string;
  members: Member[];
  isPresidents?: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  members,
  isPresidents = false,
}) => {
  return (
    <motion.div
      className="mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <div
        className={`flex items-center gap-6 mb-8 md:mb-12 ${isPresidents ? 'justify-center' : ''}`}
      >
        <h2 className="section-header text-xl md:text-2xl lg:text-3xl font-black tracking-tight uppercase m-0 drop-shadow-lg text-center">
          {title}
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

      {isPresidents ? (
        <motion.div
          className="flex flex-row justify-center items-center gap-3 sm:gap-8 md:gap-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {members.map((member, i) => (
            <motion.div
              key={i}
              className="w-full max-w-[160px] sm:max-w-[280px] aspect-[3/4] transform hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                description={member.description}
                linkedinUrl={member.linkedinUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
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
                description={member.description}
                linkedinUrl={member.linkedinUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TeamSection;
