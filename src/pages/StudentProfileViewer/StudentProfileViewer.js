import React from "react";
import styles from "./StudentProfileViewer.module.css"; // Adjust the import path as needed
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../SharedItems/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";



export default function StudentProfileViewer() {
    //Get logged in persons data from database;
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [dob, setDob] = useState("");
    const [course, setCourse] = useState("");
  // To navigate user away if they are not logged in.
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000");
        if (response.data.Error === "Not authenticated") {
          navigate("/");
        } else {
          setUserName(response.data.name);
          setUserImage(response.data.profile)
          setCourse(response.data.course);
          setDob(response.data.dob);
          setEmail(response.data.email)
          setSchool(response.data.school);

        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);




  return (
    <>
    <NavBar userName={userName} userImage={userImage}/>
      <div className={styles.mainContainer}>
        <div className={styles.imageCard}>
          <img
            src={userImage}
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
              <p>{userName}</p>
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
                <p>{course}</p>
                <p>{dob}</p>
                <p>022 524 6399</p>
                <p>{email}</p>
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
