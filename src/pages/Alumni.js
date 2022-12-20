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
import phoebus from '../assets/images/alumni/phoebus.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet Our Alumni</h2>
          <p>They've gone on to bigger things.</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <div className="image">
                <img src={youli} alt="" />
              </div>
              <h3 className="major">Youli Yao | F21</h3>
              <p>{/* VP of Events */}</p>
            </article>

            <article>
              <div className="image">
                <img src={bobby} alt="" />
              </div>
              <h3 className="major">Bobby Luo | F21</h3>
            </article>

            <article>
              <div className="image">
                <img src={cassidy} alt="" />
              </div>
              <h3 className="major">Cassidy Syao | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={kathleen} alt="" />
              </div>
              <h3 className="major">Kathleen Shao | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={deborah} alt="" />
              </div>
              <h3 className="major">Deborah Wei | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={crystal} alt="" />
              </div>
              <h3 className="major">Crystal Gao | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={dorothy} alt="" />
              </div>
              <h3 className="major">Dorothy Rong | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={scarlett} alt="" />
              </div>
              <h3 className="major">Scarlett Jiang | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={elton} alt="" />
              </div>
              <h3 className="major">Elton Zhu | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={vincent} alt="" />
              </div>
              <h3 className="major">Vincent Yu | S22</h3>
            </article>

            <article>
              <div className="image">
                <img src={jonah} alt="" />
              </div>
              <h3 className="major">Jonah Sun | F22</h3>
            </article>

            <article>
              <div className="image">
                <img src={phoebus} alt="" />
              </div>
              <h3 className="major">Phoebus Yip | S23</h3>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
