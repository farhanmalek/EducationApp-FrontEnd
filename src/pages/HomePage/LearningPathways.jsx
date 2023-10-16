import star from "../../assets/Home/star.png";
import styles from "./Home.module.css";

function LearningPathways() {
  return (
    <div className={styles.clickable}>
      <h1>Interlinking Pathways</h1>
      <p>This programme gives us 5 important interlinking Learning Pathways.</p>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>COMPUTATIONAL THINKING</h2>
          <p>
            Within the programme the students are enabled to express problems
            and form solutions that will be designed so a computer can be used
            to create diverse and encapsulating applications.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>DEVELOPING DIGITAL OUTCOMES</h2>
          <p>
            This programme is designed to strengthen the outcomes of each
            students personally to form strong applications.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>DESIGNING PROCESSED OUTCOMES</h2>
          <p>
            Students will be taught the ways of how outcomes are processed,
            thought about, and produced.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h2>
          <p>
            Students will learn to design visually pleasing applications used to
            both keep the user aware of what is happening on the screen.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>STRONG TECHNOLOGICAL PRACTICES</h2>
          <p>
            The programme will show students the best practices to think and
            solve the problems brought on by using technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearningPathways;
