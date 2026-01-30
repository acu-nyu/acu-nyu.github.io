import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import TeamMemberCard from '../components/TeamMemberCard';

const alumniData = [
  {
    year: "Class of 2026",
    members: [
      { name: "Evan Chan", photo: "alumni/evan.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/evan-chan8/" },
    ]
  },
  {
    year: "Class of 2025",
    members: [
      { name: "Grace Tan", photo: "alumni/grace.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/grace-tan-617915255/" },
      { name: "Jake Tran", photo: "alumni/jake.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/jaketytran/" },
      { name: "Phoebe Lai", photo: "alumni/PhoebeLai.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/phoebeklai/" },
      { name: "Matthew Ho", photo: "alumni/MatthewHo.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/matthew-ho-2988a522b/" },
      { name: "Patrick Wu", photo: "alumni/patrick.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/patrick-wu-48141122b/" },
      { name: "Saundra Tun", photo: "alumni/saundra.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/saundra-tun-150970397/" },
      { name: "Elaina Feng", photo: "alumni/elaina.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/elaina-feng-447766222/" },
      { name: "Tiffany Lee", photo: "alumni/tiffany.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/tiffanyleelink/" },
    ]
  },
  {
    year: "Class of 2024",
    members: [
      { name: "Eric Lai", photo: "alumni/eric.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/eric-lai-a05613253/" },
      { name: "Irene Park", photo: "alumni/irene.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/irenepark517/" },
      { name: "Jocelyn Xu", photo: "alumni/jocelyn.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/jocelyn-xu-34b504261/" },
      { name: "Doyeon Kim", photo: "alumni/doyeon.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/doyeonnkim/" },
      { name: "Phoebus Yip", photo: "alumni/phoebus.jpg", role: "Mascot", linkedinUrl: "https://www.linkedin.com/in/phoebusyip/" },
      { name: "Yujin Hong", photo: "alumni/yujin.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/yujin-hong-6059a826b/" },
    ]
  },
  {
    year: "Class of 2023",
    members: [
      { name: "Matthew Chan", photo: "alumni/chan.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/matthewjkchan/" },
      { name: "Coco Xu", photo: "alumni/coco.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/cocoxuuu/" },
      { name: "Matthew Apuya", photo: "alumni/matthew.png", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/matthewapuya/" },
      { name: "Sugin Li", photo: "alumni/sugin.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/sugin-l-458510206/" },
      { name: "Gaurav Kulkarni", photo: "alumni/gaurav.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/gauravkulkarni00/" },
      { name: "Elim Wu", photo: "alumni/elim.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/elim-wu/" },
      { name: "Catherine Ngyuen", photo: "alumni/catherine.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/ctnfilm/" },
      { name: "Lucy Lee", photo: "alumni/lucy.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/lucy-lee-a44bb6198/" },
      { name: "Sam Ye", photo: "alumni/sam.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/sam-ye0429/" },
      { name: "Lauren Guo", photo: "alumni/lauren.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/lauren-guo/" },
      { name: "Caroline Tian", photo: "alumni/caroline.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/caroline-tian/" },
      { name: "Candice Huang", photo: "alumni/candice.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/candiceehuang/" },
    ]
  },
  {
    year: "Class of 2022",
    members: [
      { name: "Cassidy Syao", photo: "alumni/cassidy.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/cassidy-syao/" },
      { name: "Kathleen Shao", photo: "alumni/kathleen.jpg", role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/kathleen-shao-876b72148/" },
      { name: "Deborah Wei", photo: "alumni/deborah.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/deborah-wei/" },
      { name: "Crystal Gao", photo: "alumni/crystal.jpg", role: "", linkedinUrl: "" },
      { name: "Dorothy Rong", photo: "alumni/dorothy.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/dorothy-jiayi-rong-37097b156/" },
      { name: "Scarlett Jiang", photo: "alumni/scarlett.jpg", role: "", linkedinUrl: "" },
      { name: "Elton Zhu", photo: "alumni/elton.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/eltonzhu/" },
      { name: "Vincent Yu", photo: "alumni/vincent.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/vincent-haoze-yu/" },
      { name: "Jonah Sun", photo: "alumni/jonah.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/jonah-sun-183931162/" },
      { name: "Youli Yao", photo: "alumni/youli.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/youli-yao/" },
      { name: "Bobby Luo", photo: "alumni/bobby.jpg", role: "", linkedinUrl: "https://www.linkedin.com/in/bobby-luo/" },
    ]
  }
];

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headerVariants}
            >
              <h2>Meet Our Alumni</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                They've gone on to bigger things.
              </motion.p>
            </motion.div>
          </div>
        </header>

        <div className="wrapper team-page px-4 md:px-8 py-12">
          <div className="inner max-w-7xl mx-auto">
            {alumniData.map((yearBlock, index) => (
              <motion.div 
                key={index} 
                className="mb-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
              >
                <div className="flex items-center gap-6 mb-8 md:mb-12 justify-center">
                  <h2 className="section-header text-xl md:text-3xl lg:text-5xl font-black tracking-tight uppercase m-0 drop-shadow-sm text-center text-slate-900">
                    {yearBlock.year}
                    <motion.div 
                      className="h-1 w-12 bg-red-600 mt-2 rounded-full mx-auto shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </h2>
                </div>

                <motion.div 
                  className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {yearBlock.members.map((member, memberIndex) => {
                    const imageNode = imageMap[member.photo];
                    const imageData = imageNode ? getImage(imageNode) : null;

                    return (
                      <motion.div key={memberIndex} variants={cardVariants}>
                        <TeamMemberCard
                          name={member.name}
                          role={member.role}
                          image={imageData}
                          isAlumni={true}
                          linkedinUrl={member.linkedinUrl}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AlumniPageQuery {
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
