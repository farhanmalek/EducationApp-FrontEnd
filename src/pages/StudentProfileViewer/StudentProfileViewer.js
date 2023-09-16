import React from 'react';
import styles from './StudentProfileViewer.module.css'; // Adjust the import path as needed
import {Link} from "react-router-dom";

export default function StudentProfileViewer() {
  return (
    <>
        <div className={styles.mainContainer}>
      <div className={styles.imageCard}>
        <img src={process.env.PUBLIC_URL + '/images/students/RawiriFletcher.png'} alt="student" />
        <button>Edit Profile</button>
        <button>Change Photo</button>
      </div>
      <div className={styles.infoCard}>
        <h1>Rawiri Fletcher</h1>
        <div className={styles.infoCardDetails}>
            <div className={styles.personalDetails}>
                <p>School</p>
                <p>Homai School</p>              
            </div>
            <div className={styles.personalDetails}>
                <p>Teacher</p>
                <p>Jasmina Salvador</p>              
            </div>
            <div className={styles.personalDetails}>
                <p>Course</p>
                <p>Beginner</p>              
            </div>
            <div className={styles.personalDetails}>
                <p>Date of Birth</p>
                <p>25 June 2010</p>              
            </div>
            <div className={styles.personalDetails}>
                <p>Contact No</p>
                <p>022 524 6399</p>              
            </div>
            <div className={styles.personalDetails}>
                <p>Email Address</p>
                <p>fletchy.r@gmail.com</p>              
            </div>
        </div>

      </div>
      <Link to="projectlibrary"><button>Back To Projects</button></Link>
    </div>
    </>
    
  );
}
