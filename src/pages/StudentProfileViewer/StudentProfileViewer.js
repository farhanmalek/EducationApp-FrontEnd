import React from "react";
import styles from "./StudentProfileViewer.module.css"; // Adjust the import path as needed
import { Link } from "react-router-dom";
import NavBar from "../SharedItems/NavBar/NavBar";

export default function StudentProfileViewer() {
  return (
    <>
    <NavBar/>
      <div className={styles.mainContainer}>
        <div className={styles.imageCard}>
          <img
            src={process.env.PUBLIC_URL + "/images/students/RawiriFletcher.png"}
            alt="student"
          />
          <div className={styles.imageButtons}>
            <button>Edit Profile</button>
            <button>Change Photo</button>
          </div>
        </div>
        <div className={styles.buttonAndCard}>
          <div className={styles.infoCard}>
            <div className={styles.studentName}>
              <p>Rawiri Fletcher</p>
            </div>
            <div className={styles.infoCardDetails}>
              <div className={styles.studentDetailsLeft}>
                <p>School</p>
                <p>Teacher</p>
                <p>Course</p>
                <p>Date of Birth</p>
                <p>Contact No</p>
                <p>Email Address</p>
              </div>
              <div className={styles.studentDetailsRight}>
                <p>Homai School</p>
                <p>Jasmina Salvado</p>
                <p>Beginner</p>
                <p>25 June 2010</p>
                <p>022 524 6399</p>
                <p>fletchy.r@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={styles.projectButton}>
            <Link to="/projectlibrary">
              <button>Back to Projects</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.projectsButton}></div>
    </>
  );
}
