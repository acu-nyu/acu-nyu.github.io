import React from 'react';

import Layout from '../components/Layout';
import Event from '../components/Event'

import logo from '../assets/images/logo.png';

import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import s24team from '../assets/images/s24-team.jpg';

import event_smash from '../assets/images/events/event_smash.jpg';
// import event_palentines from '../assets/images/events/event_palentines.jpg';
import event_ghibli from '../assets/images/events/event_ghibli.jpg';
import event_f21_midterm_destress from '../assets/images/events/event_f21_midterm_destress.jpg';
import event_s22_crafts from '../assets/images/events/event_s22_crafts.jpg';
// import event_s22_NOM from '../assets/images/events/event_s22_NOM.jpg';
import event_s22_utopia from '../assets/images/events/event_s22_utopia.jpg';
import event_f22_sips from '../assets/images/events/event_f22_sips.jpg';
import event_f22_game_night from '../assets/images/events/event_f22_game_night.jpg';
import event_f22_idol from '../assets/images/events/event_f22_idol.jpg';
import event_s23_spring from '../assets/images/events/event_spring_festival_s23.png';
// import event_s23_nom from '../assets/images/events/event_s23_nom.png';
import event_s23_palentines from '../assets/images/events/event_s23_palentines.png';
import event_f23_nom from '../assets/images/events/event_f23_nom.png';
import event_f23_retirement from '../assets/images/events/event_f23_retirement.png';
import event_f23_muji from '../assets/images/events/event_f23_muji.png';
import event_s24_inferno from '../assets/images/events/event_s24_inferno.jpg';
import event_s24_springfest from '../assets/images/events/event_s24_springfest.png';

// FALL 2024 EVENTS
import event_f24_fall from '../assets/images/events/event_f24_fall.png';
import event_f24_fright from '../assets/images/events/event_f24_fright.png';
import event_f24_NOM from '../assets/images/events/event_f24_NOM.png';

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
            <img src={s24team} alt="" />
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
            <img src={icon1} alt="" />
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
          <h2 className="major">Recent and Past Events</h2>
          <section className="features">
            <Event
              image={event_f24_NOM}
              title="ACU NOM"
              description="Calling all food lovers! ACU's annual NOM is back for a mouthwatering celebration of delicious cuisines. Indulge in an array of dishes, explore exciting flavors, and connect with friends over your favorite bites. Come hungry and leave happy!"
            />
            <Event
              image={event_f24_fright}
              title="ACU FRIGHT NIGHT"
              description="Get ready for a spooky and thrilling evening at ACU Fright Night! Come enjoy Halloween-themed games, activities, and free treats that will send shivers down your spine. Don’t forget to dress up for a chance to win prizes in our costume contest. Join us for a night of chills and fun you won’t want to miss! "
            />
            <Event
              image={event_f24_fall}
              title="ACU FALL FESTIVAL"
              description="Celebrate the cozy vibes of fall with ACU at our Fall Festival! Enjoy free food, exciting games, and fun activities to embrace the autumn season. Don’t miss out on the chance to win awesome prizes in our raffles. Join us for an unforgettable evening of festivities"
            />
            <Event
              image={event_s24_springfest}
              title="ACU Spring Festival"
              description="Come join us for the carnival/festival celebration of the spring season with free food, games, and activities. We will be holding raffles for prizes as well, so come and have fun with ACU to close out the semester!"
            />
            <Event
              image={event_s24_inferno}
              title="ACU Inferno"
              description="Inspired by the hit show Single's Inferno, ACU is excited to bring you ACU Inferno! Come meet our lovely E-Board members that will be raffled off for suitors. ACU is also excited to host YouTuber Kelly Wakasa as a special guest for this event!"
            />
            <Event
              image={event_f23_muji}
              title="ACU MUJI-CAL"
              description="Come join us at Kimmel E&L for your favorite Japanese goodies! We'll be handing out free Muji notebooks and stationaries, as well as providing boba from our partners."
            />
            <Event
              image={event_f23_nom}
              title="ACU NOM"
              description="Each year, we host our annual food festival! Join us for free food from places like Saigon Shack and drinks from our partner Whistle and Fizz at Kimmel."
            />
            <Event
              image={event_f23_retirement}
              title="ACU Retirement Home"
              description="Give your old souls a break from midterms and come join us for a night of games, snacks, and prizes! Play games like gingo, mahjong, and gonggi to win prizes."
            />
            <Event
              image={event_s23_spring}
              title="ACU x JCA Spring Festival"
              description="Our final and biggest event of the semester is here! Come join
                us at Kimmel for the ACU x JCA Spring Festival! There will be
                plenty of food as well as Asian games and prizes from student
                vendors. We also heard that Twice and Blackpink will be
                performing at the event so don't miss out!"
            />
            <Event
              image={event_s23_palentines}
              title="ACU Palentines"
              description="Valentine's day may be over but you can still make it to our
                Palentines day event! Come out and join us to decorate Insomnia
                cookies and try winning a date with one of our e-board members!"
            />
            <Event
              image={event_f22_idol}
              title="ACU Idol"
              description="Every year, we hold a singing competition for talented individuals to compete for the title of ACU Idol! Come hang out with us for food and fun!"
            />
            <Event 
              image={event_f22_idol}
              title="ACU Idol"
              description="Every year, we hold a singing competition for talented
                individuals to compete for the title of ACU Idol! As one of
                biggest events of the semester, there'll be a ton of food so
                come hang out with us in our last event of the semester!"
            />
            <Event
              image={event_f22_game_night}
              title="Game Night"
              description="Join us for another night in Kimmel to play some fun games such
                as Mahjong, Gonggi, Sushi Go, and more! Did we mention there
                will be some amazing prizes too?"
            />
            <Event 
              image={event_f22_sips}
              title="Sips n' Craft"
              description="ACU is back! Come out to our first event of the year in Kimmel
                E&L (Floor 4 Auditorium) to decorate tote bags and notebooks all
                while drinking delicious boba! See you there 😉"
            />
            <Event 
              image={event_s22_utopia}
              title="Asian Cartoon Utopia"
              description="Come hang out with us and your favorite cartoon/anime characters
              at Kimmel Rosenthal!🎉 We'll have games, arts and crafts, and of course... prizes!"
            />
            <Event
              image={event_ghibli}
              title="Ghibli Getaway"
              description="Play carnival games to win Ghibli-themed prizes and bottle your own soot sprites to take home! Connect with other Ghibli fans over free food!"
            />
            <Event
              image={event_smash}
              title="Super Smash Bros Ultimate Tournament"
              description="Come out to our Super Smash Bros Ultimate Tournament for a FREE-to-enter tournament with CASH prizes and free food!"
            />
            <Event 
              image={event_s22_crafts}
              title="Arts and Crafts Night"
              description="Our first in-person event of the S22 semester - Arts and Crafts
                Night 🎉!Join us for tote bag painting, felting, beading, origami, and
                other fun arts and crafts at Kimmel Rosenthal 🥰"
            />
            <Event 
              image={event_f21_midterm_destress}
              title="Midterm Destress"
              description="Midterm season is here, so take a break at Kimmel and pick up
                some free Muji stationary and pens! Supplies are limited, be
                sure to snag yours before we run out!"
            />
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
