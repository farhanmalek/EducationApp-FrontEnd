import styles from "./ProjectLibrary.module.css";
import Filter from "./Filter";
import {Link} from "react-router-dom";

export default function ProjectLibrary() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Filter />
        <div className={styles.contentBox}>
          <h1>Projects</h1>
          <h3>
            Welcome to the project library. You can use the filters on the right
            to help you search for specific projects
          </h3>
          <div className={styles.filterButtons}>
            <div className={styles.filterButtonsLevel}>
              <div>BEGINNER</div>
              <div>INTERMEDIATE</div>
              <div>ADVANCED</div>
            </div>
            <div className={styles.filterProjectsDisplayed}>
              <h6>SHOW</h6>
              <button>5</button>
              <button>10</button>
              <button>All</button>
            </div>
            </div>
            <div className={styles.displayProjects}>
              <div className={styles.projectCard}>
                <Link to="/studentdashboard"><img src={process.env.PUBLIC_URL + '/images/projects/Project01.png'} alt="" /></Link>
                <h2>Introduction</h2>
                <div className={styles.projectDetails}>
                  <p>Beginner</p>
                  <p>|</p>
                  <p>Animation</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
