import React from "react";
import styles from "./NavBar.module.css";
import levelUp from "../../../assets/NavBar/LevelUpWorks-white.png";
import nzFlag from "../../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../../assets/NavBar/MaoriFlag.png";
import DropDown from "./DropDown";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [isToggled, setIsToggled] = useState(false);

 


  

  return (
    <>
      {/* Basic Layout for Navbar */}
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={levelUp} alt="" />
        </Link>
        <div className={styles.navpages}>
          <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
            Home
          </Link>
          <p> Projects</p>
          <p> Teachers</p>
        </div>
        <div className={styles.rightcontainer}>
          <div
            onClick={() => setIsToggled(!isToggled)}
            className={styles.profile}
          >
            <img
              className={styles.navbarimg}
              src={
                process.env.PUBLIC_URL + "/images/students/RawiriFletcher.png"
              }
              alt="logged-in-profile"
            />
            <p>Rawiri Fletcher</p>
          </div>
          <div className={styles.misc}>
            <p>LANG</p>
            <img className={styles.flag} src={nzFlag} alt="nz-flag" />
            <img className={styles.flag} src={maoriFlag} alt="maori-flag" />
          </div>
        </div>
      </div>
      {/* Render dropdown component onclick */}
      {isToggled && <DropDown />}
    </>
  );
}
