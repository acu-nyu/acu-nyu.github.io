import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Layout from '../components/Layout';
import '../assets/sass/main.scss';
import TeamHeader from '../components/TeamHeader';
import { teamData } from '../data/teamData';
import TeamMemberCard from '../components/TeamMemberCard';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper" className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/80 to-slate-950/90 pointer-events-none -z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100%] h-[600px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <header className="relative z-10 pt-10">
        <div className="inner">
          <TeamHeader />
        </div>
      </header>

      <div className="wrapper team-page px-4 md:px-8 py-12 relative z-10">
        <div className="inner max-w-7xl mx-auto">
          {teamData.map((section, index) => {
            const isPresidents = section.section === "Presidents";

            return (
              <div key={index} className="mb-24">
                <div className={`flex items-center gap-6 mb-12 ${isPresidents ? 'justify-center' : ''}`}>
                  <h2 className="section-header text-3xl md:text-5xl font-black tracking-tight uppercase m-0 drop-shadow-lg text-center">
                    {section.section}
                    <div className="h-1 w-12 bg-red-600 mt-2 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                  </h2>
                </div>

                {isPresidents ? (
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 max-w-4xl mx-auto">
                    {section.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="w-full max-w-[280px] aspect-[3/4] transform hover:scale-105 transition-transform duration-300">
                        <TeamMemberCard
                          name={member.name}
                          role={member.role}
                          photo={member.photo}
                          description={member.description}
                          linkedinUrl={member.linkedinUrl}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {section.members.map((member, memberIndex) => (
                      <TeamMemberCard
                        key={memberIndex}
                        name={member.name}
                        role={member.role}
                        photo={member.photo}
                        description={member.description}
                        linkedinUrl={member.linkedinUrl}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
