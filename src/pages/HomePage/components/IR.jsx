import star from "../../../assets/Home/star.png";
import styles from "../Home.module.css";

function IR() {
  return (
    <div className={styles.clickable}>
      <h1>IR4.0</h1>
      <p>
        Designed with IT industry experts, the programme develops the students
        to find applicable jobs and careers in the Fourth Industrial Revolution.
        (IR4.0)
      </p>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>LEARNING TO LEARN</h2>
          <p>
            The programme will set challenges at the end of every project to
            encourage students to explore and learn how to learn.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>COMMUNITY ENGAGEMENT</h2>
          <p>
            The programme encourages students to be involved in the communities,
            such as family, friends, and in school, to contribute and make
            connections with other people.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>CULTURAL DIVERSITY</h2>
          <p>
            This programme is designed in New Zealand and reflects NZ's cultural
            diversity.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>INCLUSION</h2>
          <p>
            In particular the programme is designed with acknowledgement to the
            student's identities and talents, allowing them to be creative to
            their personal ability.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>FUTURE FOCUS</h2>
          <p>
            The programme leads students to explore future themes such as
            artificial intelligence and augmented reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IR;
