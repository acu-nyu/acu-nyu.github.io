import React from 'react';

import Layout from '../components/Layout';

import youli from '../assets/images/e-board/youli.jpg';
import bobby from '../assets/images/e-board/bobby.jpg';

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
            </article>

            <article>
              <div className="image">
                <img src={bobby} alt="" />
              </div>
              <h3 className="major">Bobby Luo | F21</h3>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
