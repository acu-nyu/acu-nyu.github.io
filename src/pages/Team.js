import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Layout from '../components/Layout';
import '../assets/sass/main.scss';
import TeamHeader from '../components/TeamHeader';
import { teamData } from '../data/teamData';
import TeamMemberCard from '../components/TeamMemberCard';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <TeamHeader></TeamHeader>
        </div>
      </header>
      <div className="wrapper team-page">
        <div className="inner">
          {teamData.map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="section-header mb-8 text-3xl font-bold">{section.section}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {section.members.map((member, memberIndex) => (
                  <TeamMemberCard
                    key={memberIndex}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                    description={member.description}
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
