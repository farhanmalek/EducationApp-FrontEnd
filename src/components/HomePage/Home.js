import React from 'react';
import './Home.css';
import heroImage from '../../assets/Home/hero.png';


function Home(){
    return(

        <div className="hero" style={{ backgroundImage: `url(${heroImage})`}}>
            <header>
                <h1>Prepare young minds for a better future</h1>
                <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning program.</p>
            </header>
            <div className="section">
                <h2>What we offer</h2>
            </div>
            <div className="section">
                <p>Teaching kids programming and Digital skills is MORE than just writing code.</p>
            </div>
            <div className="section">
                <h2>How our program helps teachers and school.</h2>
            </div>
            <div className="section">
                <h3>What are you waiting for?</h3>
            </div>
        </div>
    );
}

export default Home;