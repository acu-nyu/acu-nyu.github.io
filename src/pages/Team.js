import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import Layout from '../components/Layout';

import kyle from '../assets/images/e-board/kyle.jpg';
import avery from '../assets/images/e-board/avery.jpg';
import phoebe from '../assets/images/e-board/phoebe.jpg';
import lina from '../assets/images/e-board/lina.jpg';
import steph from '../assets/images/e-board/Steph.jpg';
import sophia from '../assets/images/e-board/Sophia.jpg';
import alex from '../assets/images/e-board/Alex.jpg';
import annika from '../assets/images/e-board/annika.jpg';
import matthew from '../assets/images/e-board/matthew.jpg';
import haruto from '../assets/images/e-board/haruto.jpg';
import tyler from '../assets/images/e-board/tyler.jpg';
import evan from '../assets/images/e-board/evan.jpg';
import amanda from '../assets/images/e-board/amanda.jpg';
import elise from '../assets/images/e-board/elise.jpg';
import danielLi from '../assets/images/e-board/daniel.jpg';
import jaclynWong from '../assets/images/e-board/JaclynWong.jpg';
import jamesShin from '../assets/images/e-board/JamesShin.jpg';
import natalieKang from '../assets/images/e-board/NatalieKang.jpg';
import joshua from '../assets/images/e-board/joshua.jpg';
import brianWang from '../assets/images/e-board/brianWang.jpg';
import izza from '../assets/images/e-board/izza.jpg';
import KennyKu from '../assets/images/e-board/KennyKu.jpg';
import TaeKim from '../assets/images/e-board/Tae_kim.jpg';
import AndreaLu from '../assets/images/e-board/Andrea_lu.jpg';
import PeterYe from '../assets/images/e-board/Peter_ye.jpg';
import IsisKim from '../assets/images/e-board/Isis_kim.jpg';
// import jack from '../assets/images/e-board/jack.jpg';
import SafiaLee from '../assets/images/e-board/SafiaLee.jpg';

// import piplup from '../assets/images/e-board/piplup.png';

import '../assets/sass/main.scss'; 
import TeamHeader from '../components/TeamHeader';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <TeamHeader></TeamHeader>
        </div>
      </header>
      <div className="wrapper team-page">
        <div className="inner">
          {/* President Section for Website */}
          <h2 className="section-header">Presidents</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className="image-container">
                <img src={tyler} alt="Tyler Shang" />
                <p className="hover-description">
                  Tyler is a very dedicated, hard working individual who puts
                  others needs as his main priority. As a fourth year student at
                  NYU studying Economics, he strives to do his best in planning
                  fun events for the club for students at the school to have an
                  amazing time!
                </p>
              </div>
              <h4 className="leader">Tyler Shang</h4>
              <p className="position">Co-President</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={lina} alt="Lina Gallo" />
                <p className="hover-description">
                  Lina is a senior majoring in Data Science and Public Policy.
                  In her free time she likes to crotchet, play mobile games, and
                  nap.
                </p>
              </div>
              <h4 className="leader">Lina Gallo</h4>
              <p className='position'>Co-President</p>
            </article> 
          </section>

          {/* Events Team */}
          <h2 className="section-header">Events</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className="image-container">
                <img src={evan} alt="Evan Chan" />
                <p className="hover-description">
                  Evan is majoring in Business and Technology Management and he
                  loves soccer and big-backing.
                </p>
              </div>
              <h4 className="leader">Evan Chan</h4>
              <p className='position'>Co-VP of Events</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={jamesShin} alt="James Shin" />
                <p className="hover-description">
                  James is a junior from Queens, New York studying Business
                  and Computer Science who likes playing instruments, listening
                  to music, going to cafes, and dancing
                </p>
              </div>
              <h4 className="leader">James Shin</h4>
              <p className='position'>Co-VP of Events</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={amanda} alt="Amanda Foekri" />
                <p className="hover-description">
                  Amanda was born and raised in Jakarta, Indonesia! She is
                  currently studying Business and Technology Management at
                  Tandon. In her free time, she enjoys drinking boba, thrifting,
                  reading, and dancing!
                </p>
              </div>
              <h4 className="member">Amanda Foekri</h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={haruto} alt="Haruto Uesugi" />
                <p className="hover-description">
                  Haruto is a junior from San Francisco studying Data Science
                  and Biology. In his free time, he enjoys running, playing
                  soccer, and reading. His favorite soccer teams are Barcelona
                  and Brighton.
                </p>
              </div>
              <h4 className="member">Haruto Uesugi</h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={kyle} alt="Kyle Park" />
                <p className="hover-description">
                  Kyle is a senior from South Korea studying Business with minor
                  in history. He enjoys exploring new cafes and reading in his
                  free time. His favorite season is Fall!
                </p>
              </div>
              <h4 className="member"> Kyle Park </h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={matthew} alt="Matthew Cheng" />
                <p className="hover-description">
                  Matthew is a CS + DS major from Princeton NJ who enjoys trying
                  new restaurants and reading.
                </p>
              </div>
              <h4 className="member">Matthew Cheng</h4>
            </article>
          </section>

          {/* Marketing Team */}
          <h2 className="section-header">Marketing</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className="image-container">
                <img src={sophia} alt="Sophia Liang" />
                <p className="hover-description">
                  Sophia Liang is a senior in Gallatin concentrating in
                  sustainable fashion. Born and raised in Seattle, Washington,
                  she is always excited to explore new places. Besides fashion,
                  Sophia is loves dancing, thrifting, and going to museums!
                </p>
              </div>
              <h4 className="leader">Sophia Liang</h4>
              <p className="position">Co-VP of Marketing</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={phoebe} alt="Phoebe Huang" />
                <p className="hover-description">
                  Phoebe Huang is from San Jose, CA and Taiwan, and she is a
                  senior studying CS+DS at CAS. Phoebe loves to online shop and
                  rot in bed💤
                </p>
              </div>
              <h4 className="leader"> Phoebe Huang </h4>
              <p className='position'>Co-VP of Marketing</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={jaclynWong} alt="Jaclyn Wong" />
                <p className="hover-description">
                  Jaclyn is from Hong Kong/Shanghai, and is majoring in nursing at Rory Meyers. In her free
                  time, she enjoys grabbing matchas with her friends, study at
                  cafes, doing ballet, and karaoke at home.
                </p>
              </div>
              <h4 className="leader">Jaclyn Wong</h4>
              <p className='position'>Historian</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={avery} alt="Avery Teano" />
                <p className="hover-description">
                  Avery is a Gallatin student who loves to eat, read, watch, listen, take 
                  photos, play games, shop, design, and explore :D
                </p>
              </div>
              <h4 className="leader">Avery Teano</h4>
              <p className='position'>Historian</p>
            </article>  


            <article className="grid-item">
              <div className="image-container">
                <img src={annika} alt="Annika Vallabhanath" />
                <p className="hover-description">
                  Annika Vallabhanath is a senior majoring in Real Estate
                  Finance and minoring in Economics and French. She was born and
                  raised in Portland, Oregon. She loves listening to classical
                  music and attending the ballet.
                </p>
              </div>
              <h4 className="member"> Annika Vallabhanath </h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={brianWang} alt="Brian Wang" />
                <p className="hover-description">
                  Brian Wang is from Palos Verdes, California and is majoring in
                  Media, Culture and Communication at NYU Steinhardt. He enjoys
                  driving around aimlessly and late-night ocean swimming.
                </p>
              </div>
              <h4 className="member"> Brian Wang </h4>
            </article>
          </section>

          {/* PR Team */}
          <h2 className="section-header">Public Relations</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className="image-container">
                <img src={KennyKu} alt="Kenny Ku" />
                <p className="hover-description">
                  Kenny is in Gallatin and really likes watching Chinese dramas,
                  listening to mandopop, and drinking matcha.
                </p>
              </div>
              <h4 className="leader"> Kenny Ku </h4>
              <p className="position">VP of Public Relations</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={izza} alt="Izza Virani" />
                <p className="hover-description">
                  Izza is from Chicago, Illinois, studying media culture and
                  communication on the pre law track. Her interests include
                  music, food, pop culture, and coffee. You can often find her
                  collecting way too many stickers for her laptop or talking
                  about any new pop culture updates she has read on Twitter (X).
                </p>
              </div>
              <h4 className="member"> Izza Virani </h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={joshua} alt="Josh Zhang" />
                <p className="hover-description">
                  Josh is studying Business Administrations and enjoys drinking
                  milk, watching the 76ers, thrifting, and listening to new
                  artists.
                </p>
              </div>
              <h4 className="member"> Joshua Zhang </h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={elise} alt="Elise Schweng" />
                <p className="hover-description">
                  Elise is from Oakland, California. She is studying Media,
                  Culture, and Communications with a minor in Business,
                  Entertainment, Media, and Technology. In her free time she
                  enjoys thrifting, playing volleyball, and getting matcha.
                </p>
              </div>
              <h4 className="member">Elise Schweng</h4>
            </article>
          </section>

          {/* RS Team */}
          <h2 className="section-header">Recruitment and Social</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className="image-container">
                <img src={natalieKang} alt="Natalie Kang" />
                <p className="hover-description">
                  Natalie is from Pleasanton, California, studying Hospitality
                  with a Marketing concentration and is interested in fashion.
                  She enjoys spending time with friends and family, traveling to
                  new places, and trying new cafes and restaurants in the city.
                </p>
              </div>
              <h4 className="leader"> Natalie Kang </h4>
              <p className="position">R/S Chair</p>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={alex} alt="Alex Xie" />
                <p className="hover-description">
                  Alex is a senior studying Computer Science and Data Science at
                  CAS. In his free time, he enjoys playing various sports and
                  going to cafes.
                </p>
              </div>
              <h4 className="member">Alex Xie</h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={danielLi} alt="Daniel Li" />
                <p className="hover-description">
                  Daniel is a third-year studying computer science and math at
                  CAS. In his free time, he likes to play the piano, cook, and
                  get lost in his daydreams. He hopes that someday, he can crack
                  eggs properly.
                </p>
              </div>
              <h4 className="member"> Daniel Li </h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={steph} alt="Stephen Park" />
                <p className="hover-description">
                  Stephan is a sophomore from South Korea studying Econ. 
                  He recently finished serving in the South Korean Army and is excited to be back!
                </p>
              </div>
              <h4 className="member">Stephan Park</h4>
            </article>
          </section>

          {/* Newbies */}
          <h2 className='section-header'>Newbies Class of Spring 2025</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className="image-container">
                <img src={TaeKim} alt="Tae Kim" />
                <p className="hover-description">
                Tae is a junior in CAS studying CS and Econ. He enjoys playing sports, trying different restaurants, 
                cooking (although he isn't good), and snowball fights.
                </p>
              </div>
              <h4 className="member">Tae Kim</h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={AndreaLu} alt="Andrea Lu" />
                <p className="hover-description">
                  Andrea is from Princeton, New Jersey and studies Economics and Public Policy at CAS. 
                  In her free time, she enjoys sewing, watching docuseries, and exploring NYC! 
                </p>
              </div>
              <h4 className="member">Andrea Lu</h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={PeterYe} alt="Peter Ye" />
                <p className="hover-description">
                  Peter is a sophomore from Atlanta studying Real Estate Finance. 
                  He likes to play soccer and pickleball, try new restaurants, and watch superhero films. 
                </p>
              </div>
              <h4 className="member">Peter Ye</h4>
            </article>
            
            <article className="grid-item">
              <div className="image-container">
                <img src={IsisKim} alt="Isis Kim" />
                <p className="hover-description">
                  Isis is a sophomore majoring in Biology at CAS. She's from L.A, California 
                  and likes to go cafe hopping, play block blast, and take naps. 
                </p>
              </div>
              <h4 className="member">Isis Kim</h4>
            </article>

            <article className="grid-item">
              <div className="image-container">
                <img src={SafiaLee} alt="Safia Lee" />
                <p className="hover-description">
                  Safia is a sophomore from Connecticut majoring in liberal studies. In her free time, she enjoys visiting museums, trying new restaurants and
                  exploring the city.
                </p>
              </div>
              <h4 className="member">Safia Lee</h4>
            </article>
          </section>
      
          {/* Abroad Section
          <h2 className="section-header">Who's Abroad?</h2>
          <section className="grid-section">
          </section> */}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
