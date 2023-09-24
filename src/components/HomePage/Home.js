import React from 'react';
import './Home.css';
import heroImage from '../../assets/Home/hero.png';


function Home(){
    return(
    <div className="home-container">
        <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="header-content">
            <header>
              <h1>
                Prepare young minds for a better{' '}
                <span style={{ color: '#43c0f6' }}>future</span>
              </h1>
              <br></br>
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
      <div className="content-container">
        <div className="sections">
          <section className="section">
            <h2>What we offer</h2>
          </section>
          <section className="section">
            <p>Teaching kids programming and digital skills is MORE than just writing code.</p>
          </section>
          <section className="section">
            <h2>How our program helps teachers and schools</h2>
          </section>
          <section className="section">
            <h3>What are you waiting for?</h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;