import React from 'react';

import Layout from '../components/Layout';

import logo from '../assets/images/logo.png';

import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import s21team from '../assets/images/s21-team.jpg';

import event_ghibli from '../assets/images/events/event_ghibli.jpg';
import event_palentines from '../assets/images/events/event_palentines.jpg';
import event_idol from '../assets/images/events/event_idol.jpg';
import event_smash from '../assets/images/events/event_smash.jpg';
import event_f21_game_night from '../assets/images/events/event_f21_game_night.jpg';
import event_f21_midterm_destress from '../assets/images/events/event_f21_midterm_destress.jpg';
import event_s22_crafts from '../assets/images/events/event_s22_crafts.jpg'
import event_s22_NOM from '../assets/images/events/event_s22_NOM.jpg'
import event_s22_utopia from '../assets/images/events/event_s22_utopia.jpg'

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className="icon" src={logo} alt="" height="100" width="100" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
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
              Our mission is to celebrate and promote Asian cultures through cultural,
              social, and business-oriented events, as well as community service
              projects.
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
            <img src={s21team} alt="" />
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
      <section id="five" className="wrapper style1">
        <div className="inner">
          <h2 className="major">Recent and Upcoming Events</h2>
          <section className="features">
          <article>
              <div className="image">
                <img src={event_s22_NOM} alt="" />
              </div>
              <h3 className="major">NOM!</h3>
              <p>
                Our annual food fest is back and better than ever! 
                🗣 Come join us for a night of asian food!
                <br></br>
                🍱 We will also have games, and a chance to win some prizes!
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_s22_utopia} alt="" />
              </div>
              <h3 className="major">Asian Cartoon Utopia</h3>
              <p>
                Come hang out with us and your favorite cartoon/anime characters at Kimmel Rosenthal!
                <br></br>
                🎉 We'll have games, arts and crafts, and of course... prizes!
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_s22_crafts} alt="" />
              </div>
              <h3 className="major">Arts and Crafts Night</h3>
              <p>
                Our first in-person event of the S22 semester - Arts and Crafts Night 🎉! 
                <br></br>
                Join us for tote bag painting, felting, beading, origami, and other fun arts and crafts at Kimmel Rosenthal 🥰
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_f21_game_night} alt="" />
              </div>
              <h3 className="major">Game Night</h3>
              <p>
                We're back! Join us for game night in Kimmel to play some fun
                games and win some amazing prizes.
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_f21_midterm_destress} alt="" />
              </div>
              <h3 className="major">Midterm Destress</h3>
              <p>
                Midterm season is here, so take a break at Kimmel and pick up
                some free Muji stationary and pens! Supplies are limited, be
                sure to snag yours before we run out!
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_ghibli} alt="" />
              </div>
              <h3 className="major">Ghibli Getaway</h3>
              <p>
                Play carnival games like Pin The Face On No Face, Totoro Relay,
                Cat Bus Scramble, and more to win Ghibli-themed prizes and
                bottle your own soot sprites to take home! Connect with other
                Ghibli fans over free food and film soundtracks! It will be a
                TOTORO-ly fun night!
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_palentines} alt="" />
              </div>
              <h3 className="major">Palentines</h3>
              <p>
                Come out for some extraordinary treats! And by treats, I mean
                our lovely E-Board members that will be raffled off for
                Valentine's day suitors. But there will be good food too of
                course.
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_idol} alt="" />
              </div>
              <h3 className="major">ACU Idol 2019</h3>
              <p>
                Every year, we hold a singing competition for talented
                individuals to compete for the title of ACU Idol! There will be
                a panel of judges, very official! There will also be additional
                performances from our lovely E-Board members but we're not
                professionals so please cheer even if we're not the best! As one
                of biggest events of the semester, there'll be a ton of food so
                come hang out with us in our last event of the semester!
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <div className="image">
                <img src={event_smash} alt="" />
              </div>
              <h3 className="major">Super Smash Bros Ultimate Tournament</h3>
              <p>
                Stop BOWS(ER)-ing social media and come out to our Super Smash
                Bros Ultimate Tournament hosted with the EAS department for a
                FREE-to-enter tournament with CASH prizes and free food! The
                East Asian Studies department will say a few words about their
                wonderful courses to give you more of an INKLING about what
                they’re offering next Spring.
              </p>
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            {/* <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul> */}
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
