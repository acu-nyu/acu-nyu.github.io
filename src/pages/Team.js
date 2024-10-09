import React from 'react';

import Layout from '../components/Layout';

import elaina from '../assets/images/e-board/elaina.jpg';
import grace from '../assets/images/e-board/grace.jpg';
import kyle from '../assets/images/e-board/kyle.jpg';
import jake from '../assets/images/e-board/jake.jpg';
import avery from '../assets/images/e-board/avery.jpg';
import phoebe from '../assets/images/e-board/phoebe.jpg';
import tiffany from '../assets/images/e-board/tiffany.jpg';
import lina from '../assets/images/e-board/lina.jpg';
import steph from '../assets/images/e-board/Steph.jpg';
import sophia from '../assets/images/e-board/Sophia.jpg';
import patrick from '../assets/images/e-board/Patrick.jpg';
import alex from '../assets/images/e-board/Alex.jpg';
import saundra from '../assets/images/e-board/saundra.jpg';
import annika from '../assets/images/e-board/annika.jpg';
import brian from '../assets/images/e-board/brian.jpg';
import matthew from '../assets/images/e-board/matthew.jpg';
import haruto from '../assets/images/e-board/haruto.jpg';
import tyler from '../assets/images/e-board/tyler.jpg';
import evan from '../assets/images/e-board/evan.jpg';
import amanda from '../assets/images/e-board/amanda.jpg';
import jack from '../assets/images/e-board/jack.jpg';
import elise from '../assets/images/e-board/elise.jpg';
import matthewHo from '../assets/images/e-board/MatthewHo.jpg';
import phoebeLai from '../assets/images/e-board/PhoebeLai.jpg';
import danielLi from '../assets/images/e-board/daniel.jpg';
import jaclynWong from '../assets/images/e-board/JaclynWong.jpg';
import jamesShin from '../assets/images/e-board/JamesShin.jpg';
import natalieKang from '../assets/images/e-board/NatalieKang.jpg';
import piplup from '../assets/images/e-board/piplup.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Meet the E-Board</h2>
          <p>
            Come see us at our next event!
          </p>
        </div>
      </header>
      <div className="wrapper team-page">
        <div className="inner">
          {/* President Section for Website */}
          <h2 className='section-header'>Presidents</h2>
          <section className="grid-section">
            <article className="grid-item">
              <img src={grace} alt="Grace Tan" />
              <h4 className='leader'>Grace Tan</h4>
              <p className='position'>Co-President</p>
            </article>
            <article className="grid-item">
              <img src={jake} alt="Jake Tran" />
              <h4 className='leader'>Jake Tran</h4>
              <p className='position'>Co-President</p>
            </article>
          </section>


          {/* Events Team */}
          <h2 className='section-header'>Events</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <img src={tyler} alt="" />
                <h4 className='leader'>Tyler Shang</h4>
                <p className='position'>Co-VP of Events</p>
            </article>

            <article className='grid-item'>
                <img src={amanda} alt="" />
                <h4 className='leader'>Amanda Foekri</h4>
                <p className='position'>Co-VP of Events</p>
            </article>

            <article className='grid-item'>
                <img src={haruto} alt="" />
                <h4>Haruto Uesugi</h4>
            </article>

            <article className='grid-item'>
                <img src={evan} alt="" />
                <h4>Evan Chan</h4>
            </article>

            <article className='grid-item'>
                <img src={jamesShin} alt="" />
                <h4>James Shin</h4>
            </article>

            <article className='grid-item'>
                <img src={matthew} alt="" />
                <h4>Matthew Cheng</h4>
            </article>
          </section>

          {/* Marketing Team */}
          <h2 className='section-header'>Marketing</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <img src={phoebeLai} alt="" />
                <h4 className='leader'>Phoebe Lai</h4>
                <p className='position'>VP of Marketing</p>
            </article>

            <article className='grid-item'>
                <img src={alex} alt="" />
                <h4>Alex Xie</h4>
            </article>

            <article className='grid-item'>
                <img src={jaclynWong} alt="" />
                <h4>Jaclyn Wong</h4>
            </article>

            <article className='grid-item'>
                <img src={avery} alt="" />
                <h4>Avery Teano</h4>
            </article>

            <article className='grid-item'>
                <img src={sophia} alt="" />
                <h4>Sophia Liang</h4>
            </article>

            <article className='grid-item'>
                <img src={annika} alt="" />
                <h4> Annika Vallabhanath </h4>
            </article>

            <article className='grid-item'>
                <img src={phoebe} alt="" />
                <h4> Phoebe Huang </h4>
            </article>

            <article className='grid-item'>
                <img src={elaina} alt="" />
                <h4> Elaina Feng </h4>
            </article>

            <article className='grid-item'>
                <img src={saundra} alt="" />
                <h4> Saundra Tun </h4>
            </article>
          </section>

          {/* PR Team */}
          <h2 className='section-header'>Public Relations</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <img src={elise} alt="" />
                <h4 className='leader'> Elise Schweng</h4>
                <p className='position'>PR Chair</p>
            </article>
            
            <article className='grid-item'>
                <img src={brian} alt="" />
                <h4> Brian Wang </h4>
            </article>

            <article className='grid-item'>
                <img src={kyle} alt="" />
                <h4> Kyle Park </h4>
            </article>
          </section>

          {/* RS Team */}
          <h2 className='section-header'>Recruitment and Social</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <img src={matthewHo} alt="" />
                <h4 className='leader'>Matthew Ho</h4>
                <p className='position'>Recruitment and Social Chair</p>
            </article>

            <article className='grid-item'>
                <img src={jack} alt="" />
                <h4> Jack Kim </h4>
            </article>

            <article className='grid-item'>
                <img src={danielLi} alt="" />
                <h4> Daniel Li </h4>
            </article>

            <article className='grid-item'>
                <img src={natalieKang} alt="" />
                <h4> Natalie Kang </h4>
            </article>
          </section>

          {/* Newbies */}
          <h2 className='section-header'>Class of Fall 2024 Newbies</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <img src={piplup} alt="" />
                <h4> Kenny Ku </h4>
            </article>

            <article className='grid-item'>
                <img src={piplup} alt="" />
                <h4> Izza Virani </h4>
            </article>

            <article className='grid-item'>
                <img src={piplup} alt="" />
                <h4> Brian Wang </h4>
            </article>

            <article className='grid-item'>
                <img src={piplup} alt="" />
                <h4> Josh Zhang </h4>
            </article>
          </section>

          <section className="features">
            <article>
              <div className="image">
                <img src={grace} alt="" />
              </div>
              <h3 className="major">Grace Tan | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={jake} alt="" />
              </div>
              <h3 className="major">Jake Tran | Co-President</h3>
            </article>

            <article>
              <div className="image">
                <img src={phoebeLai} alt="" />
              </div>
              <h3 className="major">Phoebe Lai | VP of Marketing</h3>
            </article>

            <article>
              <div className="image">
                <img src={tyler} alt="" />
              </div>
              <h3 className="major">Tyler Shang | Co-VP of Events</h3>
            </article>

            <article>
              <div className="image">
                <img src={amanda} alt="" />
              </div>
              <h3 className="major">Amanda Foekri | Co-VP of Events</h3>
            </article>

            <article>
              <div className="image">
                <img src={patrick} alt="" />
              </div>
              <h3 className="major">Patrick Wu | Treasurer </h3>
            </article>

            <article>
              <div className="image">
                <img src={avery} alt="" />
              </div>
              <h3 className="major">Avery Teano | Historian</h3>
            </article>

            <article>
              <div className="image">
                <img src={elise} alt="" />
              </div>
              <h3 className="major">Elise Schweng | Public Relations</h3>
            </article>

            <article>
              <div className="image">
                <img src={matthewHo} alt="" />
              </div>
              <h3 className="major">Matthew Ho | R/S Chair</h3>
            </article>

            <article>
              <div className="image">
                <img src={elaina} alt="" />
              </div>
              <h3 className="major">Elaina Feng</h3>
            </article>

            <article>
              <div className="image">
                <img src={kyle} alt="" />
              </div>
              <h3 className="major">Kyle Park</h3>
            </article>

            <article>
              <div className="image">
                <img src={phoebe} alt="" />
              </div>
              <h3 className="major">Phoebe Huang</h3>
            </article>

            <article>
              <div className="image">
                <img src={alex} alt="" />
              </div>
              <h3 className="major">Alex Xie</h3>
            </article>

            <article>
              <div className="image">
                <img src={saundra} alt="" />
              </div>
              <h3 className="major">Saundra Tun</h3>
            </article>

            <article>
              <div className="image">
                <img src={brian} alt="" />
              </div>
              <h3 className="major">Brian Lin</h3>
            </article>

            <article>
              <div className="image">
                <img src={sophia} alt="" />
              </div>
              <h3 className="major">Sophia Liang</h3>
            </article>

            <article>
              <div className="image">
                <img src={annika} alt="" />
              </div>
              <h3 className="major">Annika Vallabhanath </h3>
            </article>

            <article>
              <div className="image">
                <img src={haruto} alt="" />
              </div>
              <h3 className="major">Haruto Uesugi</h3>
            </article>

            <article>
              <div className="image">
                <img src={evan} alt="" />
              </div>
              <h3 className="major">Evan Chan </h3>
            </article>

            <article>
              <div className="image">
                <img src={jack} alt="" />
              </div>
              <h3 className="major">Jack Kim</h3>
            </article>

            <article>
              <div className="image">
                <img src={matthew} alt="" />
              </div>
              <h3 className="major">Matthew Cheng</h3>
            </article>

            <article>
              <div className="image">
                <img src={danielLi} alt="" />
              </div>
              <h3 className="major">Daniel Li</h3>
            </article>

            <article>
              <div className="image">
                <img src={jaclynWong} alt="" />
              </div>
              <h3 className="major">Jaclyn Wong</h3>
            </article>

            <article>
              <div className="image">
                <img src={natalieKang} alt="" />
              </div>
              <h3 className="major">Natalie Kang</h3>
            </article>

            <article>
              <div className="image">
                <img src={jamesShin} alt="" />
              </div>
              <h3 className="major">James Shin</h3>
            </article>

            <article>
              <div className="image">
                <img src={piplup} alt="" />
              </div>
              <h3 className="major">Brian Wang</h3>
            </article>

            <article>
              <div className="image">
                <img src={piplup} alt="" />
              </div>
              <h3 className="major">Izza Virani</h3>
            </article>

            <article>
              <div className="image">
                <img src={piplup} alt="" />
              </div>
              <h3 className="major">Kenny Ku</h3>
            </article>

            <article>
              <div className="image">
                <img src={piplup} alt="" />
              </div>
              <h3 className="major">Josh Zhang</h3>
            </article>

            <header>
              <div className="inner">
                <h2>Who's Abroad?</h2>
                <p>See who's abroad for this semester!</p>
              </div>
            </header>

            <section className="features">
              <article>
                <div className="image">
                  <img src={steph} alt="" />
                </div>
                <h3 className="major">Stephan Park | South Korean Army</h3>
              </article>

              <article>
                <div className="image">
                  <img src={tiffany} alt="" />
                </div>
                <h3 className="major">Tiffany Lee | Yonsei University</h3>
              </article>

              <article>
              <div className="image">
                <img src={lina} alt="" />
              </div>
              <h3 className="major">Lina Gallo | NYU Madrid</h3>
            </article>
            </section>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
