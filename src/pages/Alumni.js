import React from 'react';
import Layout from '../components/Layout';
import TeamMemberCard from '../components/TeamMemberCard';

import youli from '../assets/images/alumni/youli.jpg';
import bobby from '../assets/images/alumni/bobby.jpg';
import cassidy from '../assets/images/alumni/cassidy.jpg';
import jonah from '../assets/images/alumni/jonah.jpg';
import kathleen from '../assets/images/alumni/kathleen.jpg';
import deborah from '../assets/images/alumni/deborah.jpg';
import crystal from '../assets/images/alumni/crystal.jpg';
import dorothy from '../assets/images/alumni/dorothy.jpg';
import elton from '../assets/images/alumni/elton.jpg';
import vincent from '../assets/images/alumni/vincent.jpg';
import scarlett from '../assets/images/alumni/scarlett.jpg';
import coco from '../assets/images/alumni/coco.jpg';
import elim from '../assets/images/alumni/elim.jpg';
import catherine from '../assets/images/alumni/catherine.jpg';
import lucy from '../assets/images/alumni/lucy.jpg';
import sam from '../assets/images/alumni/sam.jpg';
import matthew from '../assets/images/alumni/matthew.png';
import lauren from '../assets/images/alumni/lauren.jpg';
import caroline from '../assets/images/alumni/caroline.jpg';
import candice from '../assets/images/alumni/candice.jpg';
import chan from '../assets/images/alumni/chan.jpg';
import sugin from '../assets/images/alumni/sugin.jpg';
import gaurav from '../assets/images/alumni/gaurav.jpg';
import phoebus from '../assets/images/alumni/phoebus.jpg';
import yujin from '../assets/images/alumni/yujin.jpg';
import doyeon from '../assets/images/alumni/doyeon.jpg';
import irene from '../assets/images/alumni/irene.jpg';
import eric from '../assets/images/alumni/eric.jpg';
import jocelyn from '../assets/images/alumni/jocelyn.jpg';
import tiffany from '../assets/images/alumni/tiffany.jpg';
import elaina from '../assets/images/alumni/elaina.jpg';
import grace from '../assets/images/alumni/grace.jpg';
import jake from '../assets/images/alumni/jake.jpg';
import phoebeLai from '../assets/images/alumni/PhoebeLai.jpg';
import matthewHo from '../assets/images/alumni/MatthewHo.jpg';
import patrick from '../assets/images/alumni/patrick.jpg';
import saundra from '../assets/images/alumni/saundra.jpg';

const alumniData = [
  {
    year: "Class of 2025",
    members: [
      { name: "Grace Tan", photo: grace, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/grace-tan-617915255/" },
      { name: "Jake Tran", photo: jake, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/jaketytran/" },
      { name: "Phoebe Lai", photo: phoebeLai, role: "", linkedinUrl: "https://www.linkedin.com/in/phoebeklai/" },
      { name: "Matthew Ho", photo: matthewHo, role: "", linkedinUrl: "https://www.linkedin.com/in/matthew-ho-2988a522b/" },
      { name: "Patrick Wu", photo: patrick, role: "", linkedinUrl: "https://www.linkedin.com/in/patrick-wu-48141122b/" },
      { name: "Saundra Tun", photo: saundra, role: "", linkedinUrl: "https://www.linkedin.com/in/saundra-tun-150970397/" },
      { name: "Elaina Feng", photo: elaina, role: "", linkedinUrl: "https://www.linkedin.com/in/elaina-feng-447766222/" },
      { name: "Tiffany Lee", photo: tiffany, role: "", linkedinUrl: "https://www.linkedin.com/in/tiffanyleelink/" },
    ]
  },
  {
    year: "Class of 2024",
    members: [
      { name: "Eric Lai", photo: eric, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/eric-lai-a05613253/" },
      { name: "Irene Park", photo: irene, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/irenepark517/" },
      { name: "Jocelyn Xu", photo: jocelyn, role: "", linkedinUrl: "https://www.linkedin.com/in/jocelyn-xu-34b504261/" },
      { name: "Doyeon Kim", photo: doyeon, role: "", linkedinUrl: "https://www.linkedin.com/in/doyeonnkim/" },
      { name: "Phoebus Yip", photo: phoebus, role: "Mascot", linkedinUrl: "https://www.linkedin.com/in/phoebusyip/" },
      { name: "Yujin Hong", photo: yujin, role: "", linkedinUrl: "https://www.linkedin.com/in/yujin-hong-6059a826b/" },
    ]
  },
  {
    year: "Class of 2023",
    members: [
      { name: "Matthew Chan", photo: chan, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/matthewjkchan/" },
      { name: "Coco Xu", photo: coco, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/cocoxuuu/" },
      { name: "Matthew Apuya", photo: matthew, role: "Co-President", linkedinUrl: "https://www.linkedin.com/in/matthewapuya/" },
      { name: "Sugin Li", photo: sugin, role: "", linkedinUrl: "https://www.linkedin.com/in/sugin-l-458510206/" },
      { name: "Gaurav Kulkarni", photo: gaurav, role: "", linkedinUrl: "https://www.linkedin.com/in/gauravkulkarni00/" },
      { name: "Elim Wu", photo: elim, role: "", linkedinUrl: "https://www.linkedin.com/in/elim-wu/" },
      { name: "Catherine Ngyuen", photo: catherine, role: "", linkedinUrl: "https://www.linkedin.com/in/ctnfilm/" },
      { name: "Lucy Lee", photo: lucy, role: "", linkedinUrl: "https://www.linkedin.com/in/lucy-lee-a44bb6198/" },
      { name: "Sam Ye", photo: sam, role: "", linkedinUrl: "https://www.linkedin.com/in/sam-ye0429/" },
      { name: "Lauren Guo", photo: lauren, role: "", linkedinUrl: "https://www.linkedin.com/in/lauren-guo/" },
      { name: "Caroline Tian", photo: caroline, role: "", linkedinUrl: "https://www.linkedin.com/in/caroline-tian/" },
      { name: "Candice Huang", photo: candice, role: "", linkedinUrl: "https://www.linkedin.com/in/candiceehuang/" },
    ]
  },
  {
    year: "Class of 2022",
    members: [
      { name: "Cassidy Syao", photo: cassidy, role: "Co-President", linkedinUrl: "" },
      { name: "Kathleen Shao", photo: kathleen, role: "Co-President", linkedinUrl: "" },
      { name: "Deborah Wei", photo: deborah, role: "", linkedinUrl: "" },
      { name: "Crystal Gao", photo: crystal, role: "", linkedinUrl: "" },
      { name: "Dorothy Rong", photo: dorothy, role: "", linkedinUrl: "" },
      { name: "Scarlett Jiang", photo: scarlett, role: "", linkedinUrl: "" },
      { name: "Elton Zhu", photo: elton, role: "", linkedinUrl: "" },
      { name: "Vincent Yu", photo: vincent, role: "", linkedinUrl: "" },
      { name: "Jonah Sun", photo: jonah, role: "", linkedinUrl: "" },
      { name: "Youli Yao", photo: youli, role: "", linkedinUrl: "" },
      { name: "Bobby Luo", photo: bobby, role: "", linkedinUrl: "" },
    ]
  }
];

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper" className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Reuse the background style from Team.js for consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/80 to-slate-950/90 pointer-events-none -z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100%] h-[600px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <header className="relative z-10 pt-10 text-center text-white mb-12">
        <div className="inner">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Alumni</h2>
          <p className="text-xl text-white/80">They've gone on to bigger things.</p>
        </div>
      </header>

      <div className="wrapper team-page px-4 md:px-8 py-12 relative z-10">
        <div className="inner max-w-7xl mx-auto">
          {alumniData.map((yearBlock, index) => (
            <div key={index} className="mb-24">
              <div className="flex items-center gap-6 mb-12 justify-center">
                <h2 className="section-header text-3xl md:text-5xl font-black tracking-tight uppercase m-0 drop-shadow-lg text-center text-white">
                  {yearBlock.year}
                  <div className="h-1 w-12 bg-red-600 mt-2 rounded-full mx-auto shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {yearBlock.members.map((member, memberIndex) => (
                  <TeamMemberCard
                    key={memberIndex}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                    isAlumni={true}
                    linkedinUrl={member.linkedinUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
