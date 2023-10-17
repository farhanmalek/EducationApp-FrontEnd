import React from "react";
import styles from "./NavBar.module.css";
import levelUp from "../../../assets/NavBar/LevelUpWorks-white.png";
import nzFlag from "../../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../../assets/NavBar/MaoriFlag.png";
import DropDown from "./DropDown";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultImg from "../../../assets/NavBar/Avatar-white.png";
import Login from "../../LogInPage/Login";
export default function NavBar({ userName, userImage,showModal,setShowModal,loginModal,setLoginModal,handleLogin}) {
  const [isToggled, setIsToggled] = useState(false);
  axios.defaults.withCredentials = true;
  


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
            onClick={() => userName && setIsToggled(!isToggled)}
            className={styles.profile}
          >
            <img
              className={styles.navbarimg}
              src={userImage ? userImage : defaultImg}
              alt="logged-in-profile"
            />
            <p>
              {userName ? (
                userName
              ) : (
                <button className={styles.loginBtn} onClick={handleLogin}>REGISTER | LOGIN</button>
              )}
            </p>
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
      {showModal && <Login setShowModal={setShowModal} showModal={showModal} loginModal={loginModal} setLoginModal={setLoginModal}/>}
    </>
  );
}
