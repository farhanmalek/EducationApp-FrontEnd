import React, { useState } from 'react';
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
import classroom from '../../assets/Home/classroom.png';
import styles from './Home.module.css';
import LoginModal from '../LogInPage/LogInPage';

function Home() {
  const images = [image1, image2, image3, image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  // Create state variables and functions to manage the login modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Function to open the login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close the login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.headerContent}>
          <header>
            <h1>
              Prepare young minds for a better{' '}
              <span className={styles.highlightedText}>future</span>
            </h1>
            <br />
            <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning program.</p>
            <div className={styles.buttonContainer}>
              <button className={styles.learnMoreButton}>
                Learn More
              </button>
              <button className={styles.signUpButton}>
                Sign Up
              </button>
              {/* Render the "Log In" button */}
              <button className={styles.loginButton} onClick={openLoginModal}>
                Log In
              </button>
            </div>
          </header>
        </div>
      </div>
      <section className={styles.twoColumnSection}>
        <div className={styles.leftColumn}>
          <h2>What we offer</h2>
          <p>The creative problem-solving program is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
          <h3>What will students create?</h3>
          {/* Display additional images under the text */}
          <div className={styles.additionalImagesHorizontal}>
            <img src={image5} alt="Additional Slide 1" />
            <img src={image6} alt="Additional Slide 2" />
            <img src={image7} alt="Additional Slide 3" />
            <img src={image8} alt="Additional Slide 4" />
          </div>
        </div>
        {/* the right side of the container to hold the slideshow */}
        <div className={styles.rightColumn}>
          <Carousel
            selectedItem={currentSlide}
            onChange={setCurrentSlide}
            showArrows={true}
            showStatus={false}
            showIndicators={true} // Display navigation dots
            showThumbs={false} // Show thumbnails of all avalable images
            infiniteLoop={true}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
          <div className={styles.navigationDots}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.containerThree}>
        <div className={styles.textContainer}>
          <h3>Teaching kids programming and digital skills is MORE than just code writing.</h3>
        </div>
        <div className={styles.imageContainer}>
          <img src={image9} alt="Image 9" />
          <img src={image10} alt="Image 10" />
          <img src={image11} alt="Image 11" />
          <img src={image12} alt="Image 12" />
        </div>
      </section>

      <br/>
      <section className={styles.containerFour}>
        <h2 style={{ textAlign: 'center' }}>How our Program helps teachers and schools</h2>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>Learning Pathways</div>
          <div className={styles.button}>Digital Technologies</div>
          <div className={styles.button}>Key Competencies</div>
          <div className={styles.button}>IR4.0</div>
        </div>
      </section>
      <br/>
      <br/>
      <section className={styles.sectionFive}>
        <h3>Enhance key Competencies</h3>
        <p>The program enhances capabilities of students in the 5 key Competencies identified in the New Zealand Curriculum:</p>
        <ul>
          <li className={styles.listItem}>THINKING
            <p>In particular, the program focuses on problem-solving, design thinking, and computational thinking.</p>
          </li>
          <li className={styles.listItem}>DECODING CODE
            <p>Analyzing language, symbols, and text in order to understand and make sense of the codes in which knowledge is expressed.</p>
          </li>
          <li className={styles.listItem}>SELF-MANAGEMENT
            <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation.</p>
          </li>
          <li className={styles.listItem}>RELATIONSHIPS WITH PEERS
            <p>The program is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognize different points of view, and share ideas.</p>
          </li>
          <li className={styles.listItem}>PARTICIPATION AND COLLABORATION
            <p>The program encourages students to be involved in communities, such as family, whanau, school, and contribute and make connections with other people.</p>
          </li>
        </ul>
      </section>
      <section className={styles.sectionSix}>
        <div className={styles.imageAndText}>
          <div className={styles.image}>
            <img src={classroom} alt="kids in classroom" />
          </div>
          <div className={styles.text}>
            <h2>What are you waiting for?</h2>
            <br/>
            <h3>Start teaching Digital Technologies today.</h3>
            <br/>
            <p>If you need more information, we are happy to answer any questions you might have.</p>
            <br/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
