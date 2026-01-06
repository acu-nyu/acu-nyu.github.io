import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import '../assets/sass/main.scss';
import TeamHeader from '../components/TeamHeader';
import { teamData } from '../data/teamData';
import TeamMemberCard from '../components/TeamMemberCard';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const IndexPage = ({ data }) => {
  // Create a map of images for easy lookup
  const imageMap = {};
  data.allFile.edges.forEach(({ node }) => {
    imageMap[node.relativePath] = node;
  });

  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header>
          <div className="inner">
            <TeamHeader />
          </div>
        </header>

        <div className="wrapper team-page px-4 md:px-8 py-12">
          <div className="inner max-w-7xl mx-auto">
            {teamData.map((section, index) => {
              const isPresidents = section.section === "Presidents";

              return (
                <motion.div 
                  key={index} 
                  className="mb-24"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={sectionVariants}
                >
                  <div className={`flex items-center gap-6 mb-8 md:mb-12 ${isPresidents ? 'justify-center' : ''}`}>
                    <h2 className="section-header text-xl md:text-3xl lg:text-5xl font-black tracking-tight uppercase m-0 drop-shadow-lg text-center">
                      {section.section}
                      <motion.div 
                        className="h-1 w-12 bg-red-600 mt-2 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    </h2>
                  </div>

                  {isPresidents ? (
                    <motion.div 
                      className="flex flex-row justify-center items-center gap-3 sm:gap-8 md:gap-10 max-w-4xl mx-auto"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {section.members.map((member, memberIndex) => {
                        const imageNode = imageMap[member.photo];
                        const imageData = imageNode ? getImage(imageNode) : null;

                        return (
                          <motion.div 
                            key={memberIndex} 
                            className="w-full max-w-[160px] sm:max-w-[280px] aspect-[3/4] transform hover:scale-105 transition-transform duration-300"
                            variants={cardVariants}
                          >
                            <TeamMemberCard
                              name={member.name}
                              role={member.role}
                              image={imageData}
                              description={member.description}
                              linkedinUrl={member.linkedinUrl}
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {section.members.map((member, memberIndex) => {
                        const imageNode = imageMap[member.photo];
                        const imageData = imageNode ? getImage(imageNode) : null;

                        return (
                          <motion.div key={memberIndex} variants={cardVariants}>
                            <TeamMemberCard
                              name={member.name}
                              role={member.role}
                              image={imageData}
                              description={member.description}
                              linkedinUrl={member.linkedinUrl}
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query TeamPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 400
              aspectRatio: 0.75
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
