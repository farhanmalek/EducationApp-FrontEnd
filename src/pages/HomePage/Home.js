import React, { useState } from "react";
import laptop1 from "../../assets/Home/laptop1.png";
import laptop2 from "../../assets/Home/laptop2.png";
import laptop3 from "../../assets/Home/laptop3.png";
import laptop4 from "../../assets/Home/laptop4.png";
import animation from "../../assets/Home/animation.png";
import ar from "../../assets/Home/augreality.png";
import chatbots from "../../assets/Home/chatbots.png";
import games from "../../assets/Home/games.png";
import image9 from "../../assets/Home/Group 1.png";
import image10 from "../../assets/Home/Group 2.png";
import image11 from "../../assets/Home/Group 3.png";
import image12 from "../../assets/Home/Group 4.png";
import classroom from "../../assets/Home/classroom.png";
import styles from "./Home.module.css";
import Login from "../LogInPage/Login";
import NavBar from "../SharedItems/NavBar/NavBar";
import LearningPathways from "./LearningPathways";
import DigitalTechnologies from "./DigitalTechnologies";
import KeyCompetencies from "./KeyCompetencies";
import IR from "./IR";
import Footer from "../SharedItems/Footer/Footer";
function Home() {
  const myImageArray = [laptop1, laptop2, laptop3, laptop4];
  const [images, setImages] = useState(laptop1);
 

  

  const handleLaptopClick = (e) => {
    if (e.target.alt === "animation") {
      setImages(myImageArray[0]);
    } else if (e.target.alt === "games") {
      setImages(myImageArray[1]);
    } else if (e.target.alt === "chatbots") {
      setImages(myImageArray[2]);
    } else {
      setImages(myImageArray[3]);
    }
  };
  //Flip between descriptions container
  const [description, setDescription] = useState("Learning Pathways");

  const handleDescriptionClick = (e) => {
    e.preventDefault();
    setDescription(e.target.name);
  };

  return (
    <>
      <NavBar/>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            Prepare young minds for a better <span>future</span>.
          </h2>
          <p>
            Let us help you advance students in Digital Technologies and other
            learning areas with our project-based learning program
          </p>
          <div className={styles.heroButtons}>
            <button>Learn More</button>
            <button>Sign Up</button>
          </div>
          <p>
            *Basic subscription includes the first 15 projects free of charge.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentContainerOne}>
          <div>
            <h2>What we offer</h2>
            <p>
              The Creative Problem Solving programme is a series of digital
              creation projects aimed to encourage self-motivation and student
              agency, designed by New Zealand's leading IT industry experts and
              schools.
            </p>
          </div>
          <div>
            <h2>What will students create?</h2>
            <div className={styles.createOptions}>
              <img
                src={animation}
                alt="animation"
                onClick={handleLaptopClick}
              ></img>
              <img src={games} alt="games" onClick={handleLaptopClick}></img>
              <img
                src={chatbots}
                alt="chatbots"
                onClick={handleLaptopClick}
              ></img>
              <img src={ar} alt="ar" onClick={handleLaptopClick}></img>
            </div>
          </div>
        </div>
        <div className={styles.contentContainerTwo}>
          <img src={images} alt="activity"></img>
          <div className={styles.slideShow}>
            <div className={`${images === laptop1 ? styles.active : ""}`}></div>
            <div className={`${images === laptop2 ? styles.active : ""}`}></div>
            <div className={`${images === laptop3 ? styles.active : ""}`}></div>
            <div className={`${images === laptop4 ? styles.active : ""}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.contentTwo}>
        <h2>
          {" "}
          Teaching kids programming and digital skills is MORE than just writing
          code.
        </h2>
        <div className={styles.contentTwoImages}>
          <img src={image9} alt="creativity and individuality"></img>
          <img src={image10} alt="critical thinking and problem solving"></img>
          <img src={image11} alt="communication and collaboration"></img>
          <img src={image12} alt="technology and future focus"></img>
        </div>
        <h2> How our programme helps teachers and schools</h2>
        <div className={styles.buttons}>
          <button
            name="Learning Pathways"
            onClick={handleDescriptionClick}
            className={`${
              description === "Learning Pathways" ? styles.activeButton : ""
            }`}
          >
            Learning Pathways
          </button>
          <button
            name="Digital Technologies"
            onClick={handleDescriptionClick}
            className={`${
              description === "Digital Technologies" ? styles.activeButton : ""
            }`}
          >
            Digital Technologies
          </button>
          <button
            name="Key Competencies"
            onClick={handleDescriptionClick}
            className={`${
              description === "Key Competencies" ? styles.activeButton : ""
            }`}
          >
            Key Competencies
          </button>
          <button
            name="IR4.0"
            onClick={handleDescriptionClick}
            className={`${description === "IR4.0" ? styles.activeButton : ""}`}
          >
            IR4.0
          </button>
        </div>
      </div>
      {description === "Learning Pathways" ? <LearningPathways /> : ""}
      {description === "Digital Technologies" ? <DigitalTechnologies /> : ""}
      {description === "Key Competencies" ? <KeyCompetencies /> : ""}
      {description === "IR4.0" ? <IR /> : ""}

      <div className={styles.lastContainer}>
        <img src={classroom} alt="classroom" />
        <div className={styles.startToday}>
          <h1> What are you waiting for?</h1>
          <p>Start teaching Digital Technologies today.</p>
          <p>
            If you need more information, we are happy to answer any questions
            you may have.
          </p>
          <div className={styles.heroButtons}>
            <button>Enquire Now</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
