import React from 'react';

import Layout from '../components/Layout';

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
import harry from '../assets/images/e-board/harry.jpg';
import maung from '../assets/images/e-board/maung.jpg';
import grace from '../assets/images/e-board/grace.jpg';
import yujin from '../assets/images/e-board/yujin.jpg';
import jocelyn from '../assets/images/e-board/jocelyn.jpg';
import doyeon from '../assets/images/e-board/doyeon.jpg';

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
                <img src={coco} alt="" width="256" length="256" />
              </div>
              <h3 className="major">Coco Xu | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={matthew} alt="" />
              </div>
              <h3 className="major"> Matthew Apuya | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={chan} alt="" />
              </div>
              <h3 className="major">Matthew Chan | VP of Events</h3>
            </article>

            <article>
              <div className="image">
                <img src={grace} alt="" />
              </div>
              <h3 className="major">Grace Tan | VP of Marketing</h3>
            </article>

            <article>
              <div className="image">
                <img src={gaurav} alt="" />
              </div>
              <h3 className="major">Gaurav Kulkarni | Treasurer</h3>
            </article>

            <article>
              <div className="image">
                <img src={elim} alt="" />
              </div>
              <h3 className="major">Elim Wu | Historian</h3>
            </article>

            <article>
              <div className="image">
                <img src={maung} alt="" />
              </div>
              <h3 className="major">Matthew Maung | Secretary</h3>
            </article>

            <article>
              <div className="image">
                <img src={lucy} alt="" />
              </div>
              <h3 className="major">Lucy Lee</h3>
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
                <img src={lauren} alt="" />
              </div>
              <h3 className="major">Lauren Guo</h3>
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

            <article>
              <div className="image">
                <img src={elaina} alt="" />
              </div>
              <h3 className="major">Elaina Feng</h3>
            </article>

            <article>
              <div className="image">
                <img src={harry} alt="" />
              </div>
              <h3 className="major">Harry Li</h3>
            </article>

            <article>
              <div className="image">
                <img src={yujin} alt="" />
              </div>
              <h3 className="major">Yujin Hong</h3>
            </article>

            <article>
              <div className="image">
                <img src={jocelyn} alt="" />
              </div>
              <h3 className="major">Jocelyn Xu</h3>
            </article>

            <article>
              <div className="image">
                <img src={doyeon} alt="" />
              </div>
              <h3 className="major">Doyeon Kim</h3>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
