import star from "../../assets/Home/star.png";
import styles from "./Home.module.css";

function DigitalTechnologies() {
  return (
    <div className={styles.clickable}>
      <h1>Expands Digital Knowledge Base</h1>
      <p>
        This programme gives you the 5 major capabilities to be confident in
        Digital Technologies.
      </p>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>PROBLEM SOLVING</h2>
          <p>
            The programme challenges are designed to think around multiple
            issues and challenges the way students interact with computers and
            other related technology.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>DECISION-MAKING</h2>
          <p>
            The programme uses technology to make the lives of many people
            happier through the decisions made when creating digital
            applications.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>CONFIDENCE</h2>
          <p>
            When having the skills to manipulate the applications and learning
            to use it brings self-confidence into your life.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>HIGHER SELF-EXPECTATIONS</h2>
          <p>
            This programme develops students to think the best of themselves to
            bring higher expectations to their learning and lives as young
            adults.
          </p>
        </div>
      </div>
      <div className={styles.bulletPoint}>
        <img src={star} alt="star"></img>
        <div className={styles.points}>
          <h2>COHERENCE</h2>
          <p>
            This programme offers all students a broader education that makes
            links within and across learning areas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DigitalTechnologies;
