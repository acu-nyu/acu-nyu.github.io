import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Event from '../components/Event';
import ScrollReveal from '../components/ScrollReveal';
import HeaderSection from '../components/HeaderSection';

import Carousel from '../components/Carousel';
import events from '../data/events';

const IndexPage = ({ data }) => {
  const imageMap = {};
  data.allFile.edges.forEach(({ node }) => {
    imageMap[node.relativePath] = node;
  });

  const getImageData = (path) => {
    const node = imageMap[path];
    return node ? getImage(node) : null;
  };

  const eventsByYear = events.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {});

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
            
            {Object.keys(eventsByYear).sort((a, b) => b - a).map((year) => (
              <div key={year} style={{ marginBottom: '4rem' }}>
                <h3 className="major">{year}</h3>
                <Carousel>
                  {eventsByYear[year].map((event, index) => (
                    <div key={index} style={{ minWidth: '350px', maxWidth: '350px' }}>
                      <Event
                        image={getImageData(event.image)}
                        title={event.title}
                        description={event.description}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            ))}
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
