import React from 'react';

import Layout from '../components/Layout';

import cassidy from '../assets/images/cassidy.jpg';
import jonah from '../assets/images/jonah.jpg';
import yaoli from '../assets/images/yaoli.jpg';
import kathleen from '../assets/images/kathleen.jpg';

import pic5 from '../assets/images/pic05.jpg';

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
          {/* Co-Presidents: Jonah & Cassidy
          VP of Events: Youli
          VP of Marketing: Kathleen
          Treasurer: Dorothy
          Secretary: Elton */}

          <section className="features">
            <article>
              <div className="image">
                <img src={cassidy} alt="" width="256" length="256" />
              </div>
              <h3 className="major">Cassidy Syao | Co-President</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={jonah} alt="" />
              </div>
              <h3 className="major">Jonah Sun | Co-President</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={yaoli} alt="" />
              </div>
              <h3 className="major">Youli Yao | VP of Events</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={kathleen} alt="" />
              </div>
              <h3 className="major">Kathleen Shao | VP of Marketing</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Deborah Wei</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Crystal Gao</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Dorothy Rong</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Elton Zhu</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Vincent Yu</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Scarlett Jiang</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Coco Xu</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Sam Ye</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Lucy Lee</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Candice Huang</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Caroline Tian</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Lauren Guo</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
            <article>
              <div className="image">
                <img src={pic5} alt="" />
              </div>
              <h3 className="major">Matthew Apuya</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
