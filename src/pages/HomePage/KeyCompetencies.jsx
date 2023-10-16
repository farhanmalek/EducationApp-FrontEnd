import star from "../../assets/Home/star.png";
import styles from "./Home.module.css";

function KeyCompetencies() {
  return (
    <div className={styles.clickable}>
      <h1>Enhance key competencies</h1>
      <p>
        The programme enhances capabilities of students in the 5 Key
        Competencies identified in the New Zealand Curriculum:
      </p>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>THINKING</h2>
          <p>
            In particular the programme focused on problem solving, design
            thinking and computational thinking.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>DISCERNING CODES</h2>
          <p>
            Analysing language, symbols, and texts in order to understand and
            make sense of the codes in which knowledge is expressed.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>SELF-MANAGEMENT</h2>
          <p>
            Projects and challenges are designed to motivate students to explore
            and experiment with self-motivation.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>RELATIONSHIPS WITH PEERS</h2>
          <p>
            The programme is designed with unplugged sessions where students
            interact in a range of different situations, including things like
            being able to listen well, recognise different points of view, and
            share ideas.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>PARTICIPATION AND COLLABORATION</h2>
          <p>
            The programme encourages students to be involved in communities,
            such as family, whanau, school, and contribute and make connections
            with other people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyCompetencies;
