import React from 'react';
import Layout from '../components/Layout';
import TeamSection from '../components/TeamSection';

import elaina from '../assets/images/e-board/elaina.jpg';
import grace from '../assets/images/e-board/grace.jpg';
import kyle from '../assets/images/e-board/kyle.jpg';
import jake from '../assets/images/e-board/jake.jpg';
import avery from '../assets/images/e-board/avery.jpg';
import phoebe from '../assets/images/e-board/phoebe.jpg';
import tiffany from '../assets/images/e-board/tiffany.jpg';
import lina from '../assets/images/e-board/lina.jpg';
import steph from '../assets/images/e-board/Steph.jpg';
import sophia from '../assets/images/e-board/Sophia.jpg';
import patrick from '../assets/images/e-board/Patrick.jpg';
import alex from '../assets/images/e-board/Alex.jpg';
import saundra from '../assets/images/e-board/saundra.jpg';
import annika from '../assets/images/e-board/annika.jpg';
import brian from '../assets/images/e-board/brian.jpg';
import matthew from '../assets/images/e-board/matthew.jpg';
import haruto from '../assets/images/e-board/haruto.jpg';
import tyler from '../assets/images/e-board/tyler.jpg';
import evan from '../assets/images/e-board/evan.jpg';
import amanda from '../assets/images/e-board/amanda.jpg';
import jack from '../assets/images/e-board/jack.jpg';
import elise from '../assets/images/e-board/elise.jpg';
import matthewHo from '../assets/images/e-board/MatthewHo.jpg';
import phoebeLai from '../assets/images/e-board/PhoebeLai.jpg';
import danielLi from '../assets/images/e-board/daniel.jpg';
import jaclynWong from '../assets/images/e-board/JaclynWong.jpg';
import jamesShin from '../assets/images/e-board/JamesShin.jpg';
import natalieKang from '../assets/images/e-board/NatalieKang.jpg';
import piplup from '../assets/images/e-board/piplup.png';

const presidents = [
  { name: 'Grace Tan', position: 'Co-President', image: grace, description:'Grace is grace' },
  { name: 'Jake Tran', position: 'Co-President', image: jake }
];

const eventsTeam = [
  { name: 'Tyler Shang', position: 'Co-VP of Events', image: tyler },
  { name: 'Amanda Foekri', position: 'Co-VP of Events', image: amanda },
  { name: 'Haruto Uesugi', image: haruto},
  { name: 'Evan Chan', image: evan},
  { name: 'James Shin', image: jamesShin},
  { name: 'Matthew Cheng', image: matthew}
];

const marketingTeam = [
  { name: 'Phoebe Lai', position: 'VP of Marketing', image: phoebeLai},
  { name: 'Alex Xie', image: alex},
  { name: 'Jaclyn Wong', image:jaclynWong},
  { name: 'Avery Teano', image:avery},
  { name: 'Sophia Liang', image: sophia},
  { name: 'Annika Vallabhanath', image:annika},
  { name: 'Saundra Tun', image: saundra},
  { name: 'Elaina Feng', image: elaina},
  { name: 'Phoebe Huang', image: phoebe}
]

const PRTeam = [
  { name: 'Elise Schweng', position: 'PR Chair', image:elise},
  { name: 'Patrick Wu', position: 'Treasurer', image:patrick},
  { name: 'Brian Lin', image: brian},
  { name: 'Kyle Park', image:kyle}
]

const RSTeam = [
  { name: 'Matthew Ho', position: 'RS Chair', image:matthewHo},
  { name: 'Jack Kim', image:jack},
  { name: 'Daniel Li', image:danielLi},
  { name: 'Natalie Kang', image: natalieKang}
]

const NewbiesTeam = [
  { name: 'Brian Wang', image:piplup},
  { name: 'Izza Virani', image:piplup},
  { name: 'Kenny Ku', image:piplup},
  { name: 'Josh Zhang', image:piplup}
]

const AbroadTeam = [
  { name: 'Stephen Park', position:'South Korean Army', image:steph},
  { name: 'Lina Gallo', position:'NYU Madrid', image:lina},
  { name: 'Tiffany Lee', position: 'Yonsei University', image:tiffany}
]

const presidentsDescription = "Our two presidents lead and oversee all the operations of the organization.";


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet the E-Board</h2>
          <p>Come see us at our next event!</p>
        </div>
      </header>

      <div className="wrapper team-page">
        <div className="inner">
          <TeamSection teamName="Presidents" teamDescription={presidentsDescription} members={presidents} />
          <TeamSection teamName="Events" members={eventsTeam} />
          <TeamSection teamName="Marketing" members={marketingTeam} />
          <TeamSection teamName="Public Relations" members={PRTeam} />
          <TeamSection teamName="Recruitment and Social" members={RSTeam} />
          <TeamSection teamName="Newbies" members={NewbiesTeam} />
          <TeamSection teamName="Abroad" members={AbroadTeam} />
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

