import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Event from '../components/Event';
import ScrollReveal from '../components/ScrollReveal';
import HeaderSection from '../components/HeaderSection';

const IndexPage = ({ data }) => {
  const imageMap = {};
  data.allFile.edges.forEach(({ node }) => {
    imageMap[node.relativePath] = node;
  });

  const getImageData = (path) => {
    const node = imageMap[path];
    return node ? getImage(node) : null;
  };

  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            <GatsbyImage
              image={getImageData('logo.png')}
              alt=""
              className="icon"
              style={{ height: '100px', width: '100px' }}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <HeaderSection></HeaderSection>
        </div>
      </section>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <ScrollReveal className="image">
              <GatsbyImage image={getImageData('s24-team.jpg')} alt="" />
            </ScrollReveal>
            <ScrollReveal className="content" delay={0.2}>
              <h2 className="major">Who are we?</h2>
              <p>
                Established in 1972, Asian Cultural Union remains the only Asian
                umbrella group at NYU and is one of the largest and most prominent
                organizations in the history of the university.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <ScrollReveal className="image">
              <GatsbyImage image={getImageData('icon2.jpg')} alt="" />
            </ScrollReveal>
            <ScrollReveal className="content" delay={0.2}>
              <h2 className="major">Our Mission</h2>
              <p>
                Our mission is to celebrate and promote Asian cultures through
                cultural, social, and business-oriented events, as well as
                community service projects.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <ScrollReveal className="image">
              <GatsbyImage image={getImageData('icon3.jpg')} alt="" />
            </ScrollReveal>
            <ScrollReveal className="content" delay={0.2}>
              <h2 className="major">Why ACU?</h2>
              <p>
                Because of our diverse membership, ACU seeks to promote the
                learning and understanding of individual heritages, while
                simultaneously creating unity among students of all ethnic
                backgrounds.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section id="four" className="wrapper alt spotlight style5">
          <div className="inner">
            <ScrollReveal className="image">
              <GatsbyImage image={getImageData('icon1.jpg')} alt="" />
            </ScrollReveal>
            <ScrollReveal className="content" delay={0.2}>
              <h2 className="major">Who can join?</h2>
              <p>
                ACU is an all-inclusive organization that welcomes members of all
                backgrounds. ACU was founded upon and continues to operate under
                the precepts of racial and social tolerance, indiscrimination, and
                equality.
              </p>
            </ScrollReveal>
          </div>
        </section>
        <section id="five" className="wrapper style1">
          <div className="inner">
            <ScrollReveal>
              <h2 className="major">Recent and Past Events</h2>
            </ScrollReveal>
            <section className="features">
              <Event
                delay={0.1}
                image={getImageData('events/event_s25_zen.png')}
                title="ACU Zen"
                description="Take a break from midterms and find your inner calm at ACU Zen! Join us for a relaxing evening filled with soothing vibes, free Muji notebooks,
                and delicious snacks to help you recharge. Whether you're looking to unwind or just enjoy a peaceful escape, this is the perfect way to de-stress."
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_s25_swoon.png')}
                title="ACU Swoon"
                description="Get ready for a romantic and enchanting evening at ACU Swoon! Come enjoy Valentine's-themed games, activities, and sweet treats that will make your heart flutter. Join us for a night of love and fun you won't want to miss!"
              />
              <Event
                delay={0.3}
                image={getImageData('events/event_f24_NOM.png')}
                title="ACU NOM"
                description="Calling all food lovers! ACU's annual NOM is back for a mouthwatering celebration of delicious cuisines. Indulge in an array of dishes, explore exciting flavors, and connect with friends over your favorite bites. Come hungry and leave happy!"
              />
              <Event
                delay={0.1}
                image={getImageData('events/event_f24_fright.png')}
                title="ACU FRIGHT NIGHT"
                description="Get ready for a spooky and thrilling evening at ACU Fright Night! Come enjoy Halloween-themed games, activities, and free treats that will send shivers down your spine. Don't forget to dress up for a chance to win prizes in our costume contest. Join us for a night of chills and fun you won’t want to miss! "
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_f24_fall.png')}
                title="ACU FALL FESTIVAL"
                description="Celebrate the cozy vibes of fall with ACU at our Fall Festival! Enjoy free food, exciting games, and fun activities to embrace the autumn season. Don't miss out on the chance to win awesome prizes in our raffles. Join us for an unforgettable evening of festivities"
              />
              <Event
                delay={0.3}
                image={getImageData('events/event_s24_springfest.png')}
                title="ACU Spring Festival"
                description="Come join us for the carnival/festival celebration of the spring season with free food, games, and activities. We will be holding raffles for prizes as well, so come and have fun with ACU to close out the semester!"
              />
              <Event
                delay={0.1}
                image={getImageData('events/event_s24_inferno.jpg')}
                title="ACU Inferno"
                description="Inspired by the hit show Single's Inferno, ACU is excited to bring you ACU Inferno! Come meet our lovely E-Board members that will be raffled off for suitors. ACU is also excited to host YouTuber Kelly Wakasa as a special guest for this event!"
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_f23_muji.png')}
                title="ACU MUJI-CAL"
                description="Come join us at Kimmel E&L for your favorite Japanese goodies! We'll have games, arts and crafts, and of course... prizes!"
              />
              <Event
                delay={0.3}
                image={getImageData('events/event_f23_nom.png')}
                title="ACU NOM"
                description="Each year, we host our annual food festival! Join us for free food from places like Saigon Shack and drinks from our partner Whistle and Fizz at Kimmel."
              />
              <Event
                delay={0.1}
                image={getImageData('events/event_f23_retirement.png')}
                title="ACU Retirement Home"
                description="Give your old souls a break from midterms and come join us for a night of games, snacks, and prizes! Play games like gingo, mahjong, and gonggi to win prizes."
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_spring_festival_s23.png')}
                title="ACU x JCA Spring Festival"
                description="Our final and biggest event of the semester is here! Come join
                  us at Kimmel for the ACU x JCA Spring Festival! There will be
                  plenty of food as well as Asian games and prizes from student
                  vendors. We also heard that Twice and Blackpink will be
                  performing at the event so don't miss out!"
              />
              <Event
                delay={0.3}
                image={getImageData('events/event_s23_palentines.png')}
                title="ACU Palentines"
                description="Valentine's day may be over but you can still make it to our
                  Palentines day event! Come out and join us to decorate Insomnia
                  cookies and try winning a date with one of our e-board members!"
              />
              <Event
                delay={0.1}
                image={getImageData('events/event_f22_idol.jpg')}
                title="ACU Idol"
                description="Every year, we hold a singing competition for talented individuals 
                to compete for the title of ACU Idol! Come hang out with us for food and fun!"
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_f22_game_night.jpg')}
                title="Game Night"
                description="Join us for another night in Kimmel to play some fun games such
                   as Mahjong, Gonggi, Sushi Go, and more! Did we mention there
                   will be some amazing prizes too?"
              />
              <Event
                delay={0.3}
                image={getImageData('events/event_f22_sips.jpg')}
                title="Sips n' Craft"
                description="ACU is back! Come out to our first event of the year in Kimmel
                  E&L (Floor 4 Auditorium) to decorate tote bags and notebooks all
                  while drinking delicious boba! See you there 😉"
              />
              <Event
                delay={0.1}
                image={getImageData('events/event_s22_utopia.jpg')}
                title="Asian Cartoon Utopia"
                description="Come hang out with us and your favorite cartoon/anime characters
                at Kimmel Rosenthal!🎉 We'll have games, arts and crafts, and of course... prizes!"
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_s22_crafts.jpg')}
                title="Arts and Crafts Night"
                description="Our first in-person event of the S22 semester - Arts and Crafts
                  Night 🎉!Join us for tote bag painting, felting, beading, origami, and
                  other fun arts and crafts at Kimmel Rosenthal 🥰"
              />
              <Event
                delay={0.3}
                image={getImageData('events/event_ghibli.jpg')}
                title="Ghibli Getaway"
                description="Play carnival games to win Ghibli-themed prizes and bottle your own soot sprites to take home! Connect with other Ghibli fans over free food!"
              />
              <Event
                delay={0.1}
                image={getImageData('events/event_smash.jpg')}
                title="Super Smash Bros Ultimate Tournament"
                description="Come out to our Super Smash Bros Ultimate Tournament for a FREE-to-enter tournament with CASH prizes and free food!"
              />
              <Event
                delay={0.2}
                image={getImageData('events/event_f21_midterm_destress.jpg')}
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
};

export const query = graphql`
  query IndexPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
