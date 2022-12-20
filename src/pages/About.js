import React from 'react';
import Layout from '../components/Layout';

import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import f22team from '../assets/images/f22-team.jpg';

const IndexPage = () => (
  <Layout>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Gallery</h2>
        </div>
      </header>

      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <div className="image">
            <img src={icon1} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Who are we?</h2>
            <p>
              Established in 1972, Asian Cultural Union remains the only Asian
              umbrella group at NYU and is one of the largest and most prominent
              organizations in the history of the university.
            </p>
            {/* <a href="/#" className="special">
            Learn more
          </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <div className="image">
            <img src={icon2} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Our Mission</h2>
            <p>
              Our mission is to celebrate and promote Asian cultures through
              cultural, social, and business-oriented events, as well as
              community service projects.
            </p>
            {/* <a href="/#" className="special">
            Learn more
          </a> */}
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <div className="image">
            <img src={icon3} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Why ACU?</h2>
            <p>
              Because of our diverse membership, ACU seeks to promote the
              learning and understanding of individual heritages, while
              simultaneously creating unity among students of all ethnic
              backgrounds.
            </p>
            {/* <a href="/#" className="special">
            Learn more
          </a> */}
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt spotlight style5">
        <div className="inner">
          <div className="image">
            <img src={f22team} alt="" />
          </div>
          <div className="content">
            <h2 className="major">Who can join?</h2>
            <p>
              ACU is an all-inclusive organization that welcomes members of all
              backgrounds. ACU was founded upon and continues to operate under
              the precepts of racial and social tolerance, indiscrimination, and
              equality.
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
