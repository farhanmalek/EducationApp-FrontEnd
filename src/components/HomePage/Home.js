import React, { useState } from 'react';
import './Home.css';
import heroImage from '../../assets/Home/hero.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/Home/laptop1.png';
import image2 from '../../assets/Home/laptop2.png';
import image3 from '../../assets/Home/laptop3.png';
import image4 from '../../assets/Home/laptop4.png';
import image5 from '../../assets/Home/animation.png';
import image6 from '../../assets/Home/augreality.png';
import image7 from '../../assets/Home/chatbots.png';
import image8 from '../../assets/Home/games.png';
import image9 from '../../assets/Home/Group 1.png';
import image10 from '../../assets/Home/Group 2.png';
import image11 from '../../assets/Home/Group 3.png';
import image12 from '../../assets/Home/Group 4.png';

function Home() {
  const images = [image1, image2, image3, image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="header-content">
          <header>
            <h1>
              Prepare young minds for a better{' '}
              <span style={{ color: '#43c0f6' }}>future</span>
            </h1>
            <br />
            <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning program.</p>
            <div className="button-container">
              <button className="learn-more-button">
                Learn More
              </button>
              <button className="sign-up-button">
                Sign Up
              </button>
            </div>
          </header>
        </div>
      </div>
      <section className="section two-column-section">
        <div className="left-column">
          <h2>What we offer</h2>
          <p>The creative problem-solving program is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
          <h3>What will students create?</h3>
          {/* Display additional images under the text */}
          <div className="additional-images-horizontal">
            <img src={image5} alt="Additional Slide 1" />
            <img src={image6} alt="Additional Slide 2" />
            <img src={image7} alt="Additional Slide 3" />
            <img src={image8} alt="Additional Slide 4" />
          </div>
        </div>
        <div className="right-column">
          <Carousel
            selectedItem={currentSlide}
            onChange={setCurrentSlide}
            showArrows={true}
            showStatus={false}
            showIndicators={true} // Display navigation dots
            showThumbs={false}
            infiniteLoop={true}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
          <div className="navigation-dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-three">
          <div className="text-content">
            <h3>Teaching kids programming and digital skills is MORE than just code writing.</h3>
          </div>
          <div className="image-container">
            <img src={image9} alt="Image 9" />
            <img src={image10} alt="Image 10" />
            <img src={image11} alt="Image 11" />
            <img src={image12} alt="Image 12" />
          </div>
      </section>
      <br/>
      <br/>
      <section className="container-four">
        <h2 style={{textAlign: 'center'}}>How our Program helps teachers and schools</h2>
        <div className="button-container">
          <div class="button">Learning Pathways</div>
          <div class="button">Digital Technologies</div>
          <div class="button">Key Competencies</div>
          <div class="button">IR4.0</div>
        </div>
      </section>
      <br/>
      <br/>
      <section className="section-five">
        <h3>Enhance key Competencies</h3>
        <p>The program enhances capabilities of students in the 5 key Competencies identified in the New Zealand Curriculum:</p>
        <ul>
            <div class="list-item">
                <li>THINKING</li>
                <p>In particular, the program focuses on problem-solving, design thinking, and computational thinking.</p>
            </div>
            <div class="list-item">
                <li>DECODING CODE</li>
                <p>Analyzing language, symbols, and text in order to understand and make sense of the codes in which knowledge is expressed.</p>
            </div>
            <div class="list-item">
                <li>SELF-MANAGEMENT</li>
                <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p>
            </div>
            <div class="list-item">
                <li>RELATIONSHIPS WITH PEERS</li>
                <p>The program is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognize different points of view, and share ideas.</p>
            </div>
            <div class="list-item">
                <li>PARTICIPATION AND COLLABORATION</li>
                <p>The program encourages students to be involved in communities, such as family, whanau, school, and contribute and make connections with other people.</p>
            </div>
        </ul>
      </section>
    </div>
  );
}

export default Home;
