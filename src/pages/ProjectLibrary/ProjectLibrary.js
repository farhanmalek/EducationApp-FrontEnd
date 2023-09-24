import styles from "./ProjectLibrary.module.css";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";  // Added useState
import data from "./data";

export default function ProjectLibrary() {
  // Add scroll to top functionality, onclick
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <Filter />
        <div className={styles.contentBox}>
          <h1>Projects</h1>
          <h3>
            Welcome to the project library. You can use the filters on the left
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
              <div className={styles.filterSelector}>
                <div>5</div>
                <div>10</div>
                <div>All</div>
              </div>
            </div>
          </div>
          <div className={styles.displayProjects}>
            {data.map((project) => (  // Moved the mapping function here
              <div className={styles.projectCard} key={project.id}>  {/* Added key */}
                <Link to="/studentdashboard">
                  <img
                    src={process.env.PUBLIC_URL + project.image}
                    alt={project.name}
                  />
                </Link>
                <h2>{project.name}</h2>
                <div className={styles.projectDetails}>
                  <p>{project.difficulty}</p>
                  <p>|</p>
                  <p>{project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className={styles.backToTopButton} onClick={handleBackToTop}>
        Back To Top
      </button>
    </>
  );
}
