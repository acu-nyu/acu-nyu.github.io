import React from 'react';

import Layout from '../components/Layout';

import irene from '../assets/images/e-board/irene.jpg';
import elaina from '../assets/images/e-board/elaina.jpg';
import eric from '../assets/images/e-board/eric.jpg';
import grace from '../assets/images/e-board/grace.jpg';
import yujin from '../assets/images/e-board/yujin.jpg';
import jocelyn from '../assets/images/e-board/jocelyn.jpg';
import doyeon from '../assets/images/e-board/doyeon.jpg';
import kyle from '../assets/images/e-board/kyle.jpg';
import jake from '../assets/images/e-board/jake.jpg';
import avery from '../assets/images/e-board/avery.jpg';
import phoebe from '../assets/images/e-board/phoebe.jpg';
import andy from '../assets/images/e-board/andy.jpg';
import tiffany from '../assets/images/e-board/tiffany.jpg';
import lina from '../assets/images/e-board/lina.jpg';

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
                <img src={eric} alt="" />
              </div>
              <h3 className="major">Eric Lai | Co-President</h3>
            </article>


            <article>
              <div className="image">
                <img src={irene} alt="" />
              </div>
              <h3 className="major">Irene Park | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={tiffany} alt="" />
              </div>
              <h3 className="major">Tiffany Lee | VP of Events</h3>
            </article>

            <article>
              <div className="image">
                <img src={avery} alt="" />
              </div>
              <h3 className="major">Avery Teano | VP of Marketing</h3>
            </article>

            <article>
              <div className="image">
                <img src={grace} alt="" />
              </div>
              <h3 className="major">Grace Tan | PR Chair</h3>
            </article>

            <article>
              <div className="image">
                <img src={jake} alt="" />
              </div>
              <h3 className="major">Jake Tran | Social Chair</h3>
            </article>

            <article>
              <div className="image">
                <img src={lina} alt="" />
              </div>
              <h3 className="major">Lina Gallo | Secretary</h3>
            </article>

            <article>
              <div className="image">
                <img src={phoebe} alt="" />
              </div>
              <h3 className="major">Phoebe Huang | Historian</h3>
            </article>

            <article>
              <div className="image">
                <img src={elaina} alt="" />
              </div>
              <h3 className="major">Elaina Feng</h3>
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

            <article>
              <div className="image">
                <img src={kyle} alt="" />
              </div>
              <h3 className="major">Kyle Park</h3>
            </article>

            <article>
              <div className="image">
                <img src={andy} alt="" />
              </div>
              <h3 className="major">Andy Cabindol</h3>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
