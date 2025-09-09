import React from 'react';
import Layout from '../components/Layout';

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
import tiffany from '../assets/images/e-board/tiffany.jpg';
import elaina from '../assets/images/e-board/elaina.jpg';
import grace from '../assets/images/e-board/grace.jpg';
import jake from '../assets/images/e-board/jake.jpg';
import phoebeLai from '../assets/images/e-board/PhoebeLai.jpg';
import matthewHo from '../assets/images/e-board/MatthewHo.jpg';
import patrick from '../assets/images/e-board/Patrick.jpg';
import saundra from '../assets/images/e-board/saundra.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet Our Alumni</h2>
          <p>They've gone on to bigger things.</p>
        </div>
      </header>

      <div className="wrapper team-page">
        <div className="inner">
          {/* Class of 2025 */}
          <h2 className="section-header">Class of 2025</h2>
          <section className="grid-section alumni">
            <article className="grid-item">
              <img src={grace} alt="Grace Tan" />
              <h3 className="leader">Grace Tan</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={jake} alt="Jake Tran" />
              <h3 className="leader">Jake Tran</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={phoebeLai} alt="Phoebe Lai" />
              <h3 className="leader">Phoebe Lai</h3>
            </article>

            <article className="grid-item">
              <img src={matthewHo} alt="Matthew Ho" />
              <h3 className="leader">Matthew Ho</h3>
            </article>

            <article className="grid-item">
              <img src={patrick} alt="Patrick Wu" />
              <h3 className="leader">Patrick Wu</h3>
            </article>

            <article className="grid-item">
              <img src={saundra} alt="Saundra" />
              <h3 className="leader">Saundra Tun</h3>
            </article>

            <article className="grid-item">
              <img src={elaina} alt="Elaina Feng" />
              <h3 className="leader">Elaina Feng</h3>
            </article>

            <article className="grid-item">
              <img src={tiffany} alt="Tiffany Lee" />
              <h3 className="leader">Tiffany Lee</h3>
            </article>
          </section>
          {/* Class of 2024 */}
          <h2 className="section-header">Class of 2024</h2>
          <section className="grid-section alumni">
            <article className="grid-item">
              <img src={eric} alt="Eric Lai" />
              <h3 className="leader">Eric Lai</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={irene} alt="Irene Park" />
              <h3 className="leader">Irene Park</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={jocelyn} alt="Jocelyn Xu" />
              <h3 className="leader">Jocelyn Xu</h3>
            </article>

            <article className="grid-item">
              <img src={doyeon} alt="Doyeon Kim" />
              <h3 className="leader">Doyeon Kim</h3>
            </article>

            <article className="grid-item">
              <img src={phoebus} alt="Phoebus Yip" />
              <h3 className="leader">Phoebus Yip</h3>
              <p className="position">Mascot</p>
            </article>

            <article className="grid-item">
              <img src={yujin} alt="Yujin Hong" />
              <h3 className="leader">Yujin Hong</h3>
            </article>

            {/* <article className="grid-item">
              <img src={andy} alt="Andy Cabindol" />
              <h3 className="leader">Andy Cabindol</h3>
            </article> */}
          </section>

          {/* Class of 2023 */}
          <h2 className="section-header">Class of 2023</h2>
          <section className="grid-section alumni">
            <article className="grid-item">
              <img src={chan} alt="Matthew Chan" />
              <h3 className="leader">Matthew Chan</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={coco} alt="Coco Xu" />
              <h3 className="leader">Coco Xu</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={matthew} alt="Matthew Apuya" />
              <h3 className="leader">Matthew Apuya</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={sugin} alt="Sugin Li" />
              <h3 className="leader">Sugin Li</h3>
            </article>

            <article className="grid-item">
              <img src={gaurav} alt="Gaurav Kulkarni" />
              <h3 className="leader">Gaurav Kulkarni</h3>
            </article>

            <article className="grid-item">
              <img src={elim} alt="Elim Wu" />
              <h3 className="leader">Elim Wu</h3>
            </article>

            <article className="grid-item">
              <img src={catherine} alt="Catherine Ngyuen" />
              <h3 className="leader">Catherine Ngyuen</h3>
            </article>

            <article className="grid-item">
              <img src={lucy} alt="Lucy Lee" />
              <h3 className="leader">Lucy Lee</h3>
            </article>

            <article className="grid-item">
              <img src={sam} alt="Sam Ye" />
              <h3 className="leader">Sam Ye</h3>
            </article>

            <article className="grid-item">
              <img src={lauren} alt="Lauren Guo" />
              <h3 className="leader">Lauren Guo</h3>
            </article>

            <article className="grid-item">
              <img src={caroline} alt="Caroline Tian" />
              <h3 className="leader">Caroline Tian</h3>
            </article>

            <article className="grid-item">
              <img src={candice} alt="Candice Huang" />
              <h3 className="leader">Candice Huang</h3>
            </article>
          </section>

          {/* Class of 2022 */}
          <h2 className="section-header">Class of 2022</h2>
          <section className="grid-section alumni">
            <article className="grid-item">
              <img src={cassidy} alt="Cassidy Syao" />
              <h3 className="leader">Cassidy Syao</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={kathleen} alt="Kathleen Shao" />
              <h3 className="leader">Kathleen Shao</h3>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <img src={deborah} alt="Deborah Wei" />
              <h3 className="leader">Deborah Wei</h3>
            </article>

            <article className="grid-item">
              <img src={crystal} alt="Crystal Gao" />
              <h3 className="leader">Crystal Gao</h3>
            </article>

            <article className="grid-item">
              <img src={dorothy} alt="Dorothy Rong" />
              <h3 className="leader">Dorothy Rong</h3>
            </article>

            <article className="grid-item">
              <img src={scarlett} alt="Scarlett Jiang" />
              <h3 className="leader">Scarlett Jiang</h3>
            </article>

            <article className="grid-item">
              <img src={elton} alt="Elton Zhu" />
              <h3 className="leader">Elton Zhu</h3>
            </article>

            <article className="grid-item">
              <img src={vincent} alt="Vincent Yu" />
              <h3 className="leader">Vincent Yu</h3>
            </article>

            <article className="grid-item">
              <img src={jonah} alt="Jonah Sun" />
              <h3 className="leader">Jonah Sun</h3>
            </article>

            <article className="grid-item">
              <img src={youli} alt="Youli Yao" />
              <h3 className="leader">Youli Yao</h3>
            </article>

            <article className="grid-item">
              <img src={bobby} alt="Bobby Luo" />
              <h3 className="leader">Bobby Luo</h3>{' '}
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
