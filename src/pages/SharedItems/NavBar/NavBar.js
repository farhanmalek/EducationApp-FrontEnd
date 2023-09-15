import React from 'react';
import styles from "./NavBar.module.css";
import levelup from "../../../assets/NavBar/LevelUpWorks-white.png"


export default function NavBar() {





  return (
    <>
    <div className={styles.container}>
        <img  className={styles.logo} src={levelup} alt=''/>
        <div className={styles.navpages}>
        <a href ="#"> Home</a>
        <a href ="#"> Projects</a>
        <a href ="#"> Teachers</a>
        </div>
        
    </div>
    
    </>
  )
}
