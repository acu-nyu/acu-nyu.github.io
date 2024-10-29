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
          <p>Come see us at our next event!</p>
        </div>
      </header>
      <div className="wrapper team-page">
        <div className="inner">
          {/* President Section for Website */}
          <h2 className="section-header">Presidents</h2>
          <section className="grid-section">
            <article className="grid-item">
              <div className='image-container'>
                <img src={grace} alt="Grace Tan" />
                <p className='hover-description'>
                Grace Tan is a senior majoring in Media, Culture, and Communication. 
                She enjoys indie concerts, overpriced vintage, and traveling.
                </p>
              </div>
              <h4 className='leader'>Grace Tan</h4>
              <p className='position'>Co-President</p>
            </article>
            <article className="grid-item">
              <div className='image-container'>
                <img src={jake} alt="Jake Tran" />
                <p className='hover-description'>
                  Jake Tran is a Senior studying Hospitality in SPS. 
                  He enjoys music festivals, good restaurants and a fun time!
                </p>
              </div>
              <h4 className='leader'>Jake Tran</h4>
              <p className='position'>Co-President</p>
            </article>
          </section>

          {/* Events Team */}
          <h2 className='section-header'>Events</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={tyler} alt="Tyler Shang" />
                  <p className='hover-description'>
                    Tyler is a very dedicated, hard working individual who puts others needs as his main priority. 
                    As a third year student at NYU studying Economics, he strives to do his best in planning 
                    fun events for the club for students at the school to have an amazing time!
                  </p>
                </div>
                <h4 className='leader'>Tyler Shang</h4>
                <p className='position'>Co-VP of Events</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={amanda} alt="Amanda Foekri" />
                  <p className='hover-description'>
                    Amanda was born and raised in Jakarta, Indonesia! 
                    She is currently studying Business and Technology Management at Tandon. 
                    In her free time, she enjoys drinking boba, thrifting, reading, and dancing!
                  </p>
                </div>
                <h4 className='leader'>Amanda Foekri</h4>
                <p className='position'>Co-VP of Events</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={haruto} alt="Haruto Uesugi" />
                  <p className='hover-description'>
                    Haruto is a sophomore from San Francisco studying Data Science and Biology. 
                    In his free time, he enjoys running, playing soccer, and reading. 
                    His favorite soccer teams are Barcelona and Brighton.
                  </p>
                </div>
                <h4 className='member'>Haruto Uesugi</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={evan} alt="Evan Chan" />
                  <p className='hover-description'>
                    Evan is majoring in Business and Technology Management and he loves soccer and big-backing.
                  </p>
                </div>
                <h4 className='member'>Evan Chan</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={jamesShin} alt="James Shin" />
                  <p className='hover-description'>
                    James is a sophomore from Queens, New York studying Business and Computer Science 
                    who likes playing instruments, listening to music, going to cafes, and dancing
                  </p>
                </div>
                <h4 className='member'>James Shin</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={matthew} alt="Matthew Cheng" />
                  <p className='hover-description'>
                    Matthew is a CS + DS major from Princeton NJ who enjoys trying new restaurants and reading. 
                  </p>
                </div>
                <h4 className='member'>Matthew Cheng</h4>
            </article>
          </section>

          {/* Marketing Team */}
          <h2 className='section-header'>Marketing</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={phoebeLai} alt="Phoebe Lai" />
                  <p className='hover-description'>
                    Phoebe is a design major at tandon and she enjoys music and going to concerts.
                  </p>
                </div>
                <h4 className='leader'>Phoebe Lai</h4>
                <p className='position'>VP of Marketing</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={alex} alt="Alex Xie" />
                  <p className='hover-description'>
                    Alex is a junior studying Computer Science and Data Science at CAS. In his free time, 
                    he enjoys playing various sports and going to cafes.
                  </p>
                </div>
                <h4 className='member'>Alex Xie</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={jaclynWong} alt="Jaclyn Wong" />
                  <p className='hover-description'>
                    Jaclyn is from Hong Kong/Shanghai, and she is studying Applied Psychology 
                    and Global Public Health at Steinhardt. In her free time, she enjoys grabbing 
                    matchas with her friends, study at cafes, doing ballet, and karaoke at home.
                  </p>
                </div>
                <h4 className='member'>Jaclyn Wong</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={avery} alt="Avery Teano" />
                  <p className='hover-description'>Jake jake jake jake jake jake jake jake </p>
                </div>
                <h4 className='member'>Avery Teano</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={sophia} alt="Sophia Liang" />
                  <p className='hover-description'>
                    Sophia Liang is a Junior in Gallatin concentrating in sustainable fashion. 
                    Born and raised in Seattle, Washington, she is always excited to explore new places. 
                    Besides fashion, Sophia is loves dancing, thrifting, and going to museums!  
                  </p>
                </div>
                <h4 className='member'>Sophia Liang</h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={annika} alt="Annika Vallabhanath" />
                  <p className='hover-description'>Jake jake jake jake jake jake jake jake </p>
                </div>
                <h4 className='member'> Annika Vallabhanath </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={phoebe} alt="Phoebe Huang" />
                  <p className='hover-description'>
                    Phoebe Huang is from San Jose, CA and Taiwan, and she is a Junior studying CS+DS at CAS. 
                    Phoebe loves to online shop and rot in bed💤
                  </p>
                </div>
                <h4 className='member'> Phoebe Huang </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={elaina} alt="Elaina Feng" />
                  <p className='hover-description'>
                    Elaina is a buisness major concentrating in marketing and data science. In her free time,
                    she enjoys reading, mobile games, and finding good restaurants in NYC
                   </p>
                </div>
                <h4 className='member'> Elaina Feng </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={saundra} alt="Saundra Tun" />
                  <p className='hover-description'>Jake jake jake jake jake jake jake jake </p>
                </div>
                <h4 className='member'> Saundra Tun </h4>
            </article>
          </section>

          {/* PR Team */}
          <h2 className='section-header'>Public Relations</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={elise} alt="Elise Schweng" />
                  <p className='hover-description'>
                    Elise is from Oakland, California. She is studying Media, Culture, and Communications 
                    with a minor in Business, Entertainment, Media, and Technology. 
                    In her free time she enjoys thrifting, playing volleyball, and getting matcha. 
                  </p>
                </div>
                <h4 className='leader'> Elise Schweng</h4>
                <p className='position'>PR Chair</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={patrick} alt="Patrick Wu" />
                  <p className='hover-description'>
                  Patrick is a curious and driven individual who thrives on solving complex problems. 
                  He’s adaptable, creative, and passionate about learning, 
                  bringing energy and dedication to every project he takes on.
                  </p>
                </div>
                <h4 className='leader'>Patrick Wu</h4>
                <p className='position'>Treasurer</p>
            </article>
            
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={brian} alt="Brian Lin" />
                  <p className='hover-description'>Jake jake jake jake jake jake jake jake </p>
                </div>
                <h4 className='member'> Brian Lin </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={kyle} alt="Kyle Park" />
                  <p className='hover-description'>
                    Kyle is a junior from South Korea studying Business with minor in history. 
                    He enjoys exploring new cafes and reading in his free time. 
                    His favorite season is Fall! 
                  </p>
                </div>
                <h4 className='member'> Kyle Park </h4>
            </article>
          </section>

          {/* RS Team */}
          <h2 className='section-header'>Recruitment and Social</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={matthewHo} alt="Matthew Ho" />
                  <p className='hover-description'>
                    Matthew loves to learn 🤓
                  </p>
                </div>
                <h4 className='leader'>Matthew Ho</h4>
                <p className='position'>Recruitment and Social Chair</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={jack} alt="Jack Kim" />
                  <p className='hover-description'>
                    Jack is majoring in CS and enjoys playing poker and watching sports.
                  </p>
                </div>
                <h4 className='member'> Jack Kim </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={danielLi} alt="Daniel Li" />
                  <p className='hover-description'>
                  Daniel is a second-year studying computer science and math at CAS. 
                  In his free time, he likes to play the piano, cook, and get lost in his daydreams. 
                  He hopes that someday, he can crack eggs properly.
                  </p>
                </div>
                <h4 className='member'> Daniel Li </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={natalieKang} alt="Natalie Kang" />
                  <p className='hover-description'>
                    Natalie is from Pleasanton, California, studying Hospitality with a Marketing concentration and is interested in fashion. 
                    She enjoys spending time with friends and family, traveling to new places, and trying new cafes and restaurants in the city.
                  </p>
                </div>
                <h4 className='member'> Natalie Kang </h4>
            </article>
          </section>

          {/* Newbies */}
          <h2 className='section-header'>Class of Fall 2024 Newbies</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={piplup} alt="Kenny Ku" />
                  <p className='hover-description'>
                    Kenny is in Gallatin and really likes watching chinese dramas, listening to mandopop, and drinking matcha.
                  </p>
                </div>
                <h4 className='member'> Kenny Ku </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={piplup} alt="Izza Virani" />
                  <p className='hover-description'>
                  Izza is from Chicago, Illinois, studying media culture and communication on the pre law track. 
                  Her interests include music, food, pop culture, and coffee. 
                  You can often find her collecting way too many stickers for her laptop 
                  or talking about any new pop culture updates she has read on Twitter (X).
                  </p>
                </div>
                <h4 className='member'> Izza Virani </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={piplup} alt="Brian Wang" />
                  <p className='hover-description'>
                    Brian Wang is from Palos Verdes, California and is majoring in Media, 
                    Culture and Communication at NYU Steinhardt. 
                    He enjoys driving around aimlessly and late-night ocean swimming.
                  </p>
                </div>
                <h4 className='member'> Brian Wang </h4>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={piplup} alt="Josh Zhang" />
                  <p className='hover-description'>
                    Josh is studying Business Administrations and enjoys drinking milk, watching the 76ers, 
                    thrifting, and listening to new artists.
                  </p>
                </div>
                <h4 className='member'> Joshua Zhang </h4>
            </article>
          </section>

          {/* Abroad Section */}
          <h2 className='section-header'>Who's Abroad?</h2>
          <section className='grid-section'>
            <article className='grid-item'>
                <div className='image-container'>
                  <img src={steph} alt="Stephen Park" />
                  <p className='hover-description'>
                    Have fun in the army Steph!
                  </p>
                </div>
                <h4 className='leader'>Stephen Park</h4>
                <p className='position'>South Korean Army</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={lina} alt="Lina Gallo" />
                  <p className='hover-description'>
                    Have fun in Madrid Lina!
                  </p>
                </div>
                <h4 className='leader'>Lina Gallo</h4>
                <p className='position'>NYU Madrid</p>
            </article>

            <article className='grid-item'>
                <div className='image-container'>
                  <img src={tiffany} alt="Tiffany Lee" />
                  <p className='hover-description'>
                    Have fun at Yonsei Tiffany!
                  </p>
                </div>
                <h4 className='leader'>Tiffany Lee</h4>
                <p className='position'>Yonsei University</p>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
