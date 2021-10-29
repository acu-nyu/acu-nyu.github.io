import React from 'react';

import Layout from '../components/Layout';

import cassidy from '../assets/images/e-board/cassidy.jpg';
import jonah from '../assets/images/e-board/jonah.jpg';
import youli from '../assets/images/e-board/youli.jpg';
import kathleen from '../assets/images/e-board/kathleen.jpg';
import deborah from '../assets/images/e-board/deborah.jpg';
import crystal from '../assets/images/e-board/crystal.jpg';
import dorothy from '../assets/images/e-board/dorothy.jpg';
import elton from '../assets/images/e-board/elton.jpg';
import vincent from '../assets/images/e-board/vincent.jpg';
import scarlett from '../assets/images/e-board/scarlett.jpg';
import coco from '../assets/images/e-board/coco.jpg';
import sam from '../assets/images/e-board/sam.jpg';
import lucy from '../assets/images/e-board/lucy.jpg';
import elim from '../assets/images/e-board/elim.jpg';
import catherine from '../assets/images/e-board/catherine.jpg';
import candice from '../assets/images/e-board/candice.jpg';
import caroline from '../assets/images/e-board/caroline.jpg';
import lauren from '../assets/images/e-board/lauren.jpg';
import matthew from '../assets/images/e-board/matthew.png';
import sugin from '../assets/images/e-board/sugin.jpg';
import gaurav from '../assets/images/e-board/gaurav.jpg';
import chan from '../assets/images/e-board/chan.jpg';
import irene from '../assets/images/e-board/irene.jpg';
import elaina from '../assets/images/e-board/elaina.jpg';
import eric from '../assets/images/e-board/eric.jpg';
import bobby from '../assets/images/e-board/bobby.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet the E-Board</h2>
          <p>Hey there. We're here for you.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <div className="image">
                <img src={cassidy} alt="" width="256" length="256" />
              </div>
              <h3 className="major">Cassidy Syao | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={kathleen} alt="" />
              </div>
              <h3 className="major">Kathleen Shao | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={youli} alt="" />
              </div>
              <h3 className="major">Youli Yao | VP of Events</h3>
            </article>

            <article>
              <div className="image">
                <img src={lucy} alt="" />
              </div>
              <h3 className="major">Lucy Lee | VP of Marketing</h3>
            </article>

            <article>
              <div className="image">
                <img src={lauren} alt="" />
              </div>
              <h3 className="major">Lauren Guo | Treasurer</h3>
            </article>

            <article>
              <div className="image">
                <img src={elim} alt="" />
              </div>
              <h3 className="major">Elim Wu | Historian</h3>
            </article>

            <article>
              <div className="image">
                <img src={matthew} alt="" />
              </div>
              <h3 className="major">Matthew Apuya | Secretary</h3>
            </article>

            {/* <article>
              <div className="image">
                <img src={dorothy} alt="" />
              </div>
              <h3 className="major">Phoebus Yip</h3>
            </article> */}

            <article>
              <div className="image">
                <img src={deborah} alt="" />
              </div>
              <h3 className="major">Deborah Wei</h3>        
            </article>

            <article>
              <div className="image">
                <img src={crystal} alt="" />
              </div>
              <h3 className="major">Crystal Gao</h3> 
            </article>

            <article>
              <div className="image">
                <img src={jonah} alt="" />
              </div>
              <h3 className="major">Jonah Sun</h3>
            </article>

            <article>
              <div className="image">
                <img src={dorothy} alt="" />
              </div>
              <h3 className="major">Dorothy Rong</h3>
            </article>

            <article>
              <div className="image">
                <img src={elton} alt="" />
              </div>
              <h3 className="major">Elton Zhu</h3>
            </article>

            <article>
              <div className="image">
                <img src={vincent} alt="" />
              </div>
              <h3 className="major">Vincent Yu</h3>
            </article>

            <article>
              <div className="image">
                <img src={scarlett} alt="" />
              </div>
              <h3 className="major">Scarlett Jiang</h3>
            </article>

            <article>
              <div className="image">
                <img src={bobby} alt="" />
              </div>
              <h3 className="major">Bobby Luo</h3>
            </article>

            <article>
              <div className="image">
                <img src={coco} alt="" />
              </div>
              <h3 className="major">Coco Xu</h3>
            </article>

            <article>
              <div className="image">
                <img src={catherine} alt="" />
              </div>
              <h3 className="major">Catherine Nguyen</h3>
            </article>

            <article>
              <div className="image">
                <img src={sam} alt="" />
              </div>
              <h3 className="major">Sam Ye</h3>
            </article>

            <article>
              <div className="image">
                <img src={candice} alt="" />
              </div>
              <h3 className="major">Candice Huang</h3>
            </article>

            <article>
              <div className="image">
                <img src={caroline} alt="" />
              </div>
              <h3 className="major">Caroline Tian</h3>
            </article>

            <article>
              <div className="image">
                <img src={sugin} alt="" />
              </div>
              <h3 className="major">Sugin Li</h3>
            </article>

            <article>
              <div className="image">
                <img src={gaurav} alt="" />
              </div>
              <h3 className="major">Gaurav Kulkarni</h3>
            </article>

            <article>
              <div className="image">
                <img src={chan} alt="" />
              </div>
              <h3 className="major">Matthew Chan</h3>
            </article>

            <article>
              <div className="image">
                <img src={irene} alt="" />
              </div>
              <h3 className="major">Irene Park</h3>
            </article>

            <article>
              <div className="image">
                <img src={eric} alt="" />
              </div>
              <h3 className="major">Eric Lai</h3>
            </article>

            {/* <article>
              <div className="image">
                <img src={chan} alt="" />
              </div>
              <h3 className="major">Matthew Muang</h3>
            </article> */}

            <article>
              <div className="image">
                <img src={elaina} alt="" />
              </div>
              <h3 className="major">Elaina Feng</h3>
            </article>

            {/* <article>
              <div className="image">
                <img src={chan} alt="" />
              </div>
              <h3 className="major">Harry Li</h3>
            </article> */}
            
            {/* <article>
              <div className="image">
                <img src={chan} alt="" />
              </div>
              <h3 className="major">Grace Tan</h3>
            </article> */}
            
            {/* <article>
              <div className="image">
                <img src={chan} alt="" />
              </div>
              <h3 className="major">Yujin Hong</h3>
            </article> */}
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
