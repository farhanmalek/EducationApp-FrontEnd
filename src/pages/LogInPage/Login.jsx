import React from "react";
import styles from "../LogInPage/Login.module.css";
import esc from "../../assets/LoginSignup/esc.png";
import students from "../../assets/LoginSignup/students.png";
import teachers from "../../assets/LoginSignup/teachers.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login({ setShowModal, setLoginModal, loginModal,showModal,signUpModal,setSignUpModal}) {
  //Declare states and setup variables
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [message, setMessage] = useState("");
  const [isTeacher, setIsTeacher] = useState("");
  
 //Login user function
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.name === "student") {
     
      loginUser("/student")
    } else if (e.target.name === "teacher") {
      loginUser("/teacher");
     
    }
  
  }

  const loginUser = async (path) => {
    try {
      const response = await axios.post(`http://localhost:5000/login${path}`, {
        email,
        password,
      });
      if (response.status === 200) {
        alert("Logged in");
        navigate("/projectlibrary");
      } else {
        setMessage("Invalid credentials!");
      }
    } catch (err) {
      console.error("Error logging in", err);
    }
  };

  //Open Signup modal and redirect to signup page on modal when any signup buttons clicked.
  const handleSignUp = () => {
    setSignUpModal(true);
    setLoginModal(false);

  };

// Setup Register Feature
function handleRegisterSubmit (e) {
  e.preventDefault();
  if (password === passwordCheck) {
    if (e.target.name === "student") {
      setIsTeacher(0);
      registerUser("/student")
    } else if (e.target.name === "teacher") {
      registerUser("/teacher");
      setIsTeacher(1);
    }

  } else {
    setMessage("Passwords do not match!");
  }
}

const registerUser = async (path) => {
  try {
    const response = await axios.post(`http://localhost:5000/register${path}`, {
      fullName,
      email,
      password,
      isTeacher
    });
    if (response.status === 200) {
      alert("Registeration Successful");
    }
  } catch (err) {
    console.error("Error with request", err);
  } finally {
    setEmail("");
    setPassword("");
  }
};






  return (
    <div className={styles.loginContainer}>
      <div className={styles.studentContainer}>
        <img src={students} alt="students"></img>
        <h1> Students</h1>
        <div className={styles.regButtons}>
          <button
            name="login"
            onClick={() => {
              setLoginModal(true);
              setSignUpModal(false);
            }}
            className={`${loginModal ? styles.activeLogin : ""}`}
          >
            LOG IN
          </button>
          <button
            name="signup"
            onClick={handleSignUp}
            className={`${signUpModal ? styles.activeRegister : ""}`}
          >
            SIGN UP
          </button>
        </div>
        <div className={styles.form}>
          <form>
            {signUpModal &&  <div className={styles.formInput}>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>}
            <div className={styles.formInput}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {signUpModal && (
              <div className={styles.formGroup}>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              </div>
            )}
            {signUpModal ? (
              <button
                type="submit"
                name="student"
                className={styles.inputButton}
                onClick={handleRegisterSubmit}
              >
                SignUp
              </button>
            ) : (
              <button
                type="submit"
                name="student"
                className={styles.inputButton}
                onClick={handleSubmit}
              >
                Login
              </button>
            )}
            <p className={styles.displayMessage}>{message}</p>
          </form>
        </div>
      </div>

      <div className={styles.teacherContainer}>
        <img
          src={esc}
          alt="x"
          onClick={() => {
            setShowModal(!showModal);
            setLoginModal(!loginModal);
          }}
        />
        <img src={teachers} alt="teachers"></img>
        <h1>Teachers</h1>
        <div className={styles.regButtons}>
          <button
            name="login"
            onClick={() => {
              setLoginModal(true);
              setSignUpModal(false);
            }}
            className={`${loginModal ? styles.activeLogin : ""}`}
          >
            LOG IN
          </button>
          <button
            name="signup"
            onClick={handleSignUp}
            className={`${signUpModal ? styles.activeRegister : ""}`}
          >
            SIGN UP
          </button>
        </div>
        <div className={styles.form}>
          <form>
          {signUpModal &&  <div className={styles.formInput}>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>}

            <div className={styles.formInput}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {signUpModal && (
              <div className={styles.formGroup}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              </div>
            )}
            {signUpModal ? (
              <button
                type="submit"
                name="teacher"
                className={styles.inputButton}
                onClick={handleRegisterSubmit}
              >
                Sign Up
              </button>
            ) : (
              <button
                type="submit"
                name="teacher"
                className={styles.inputButton}
                onClick={handleSubmit}
              >
                Login
              </button>
            )}
            <p className={styles.displayMessage}>{message}</p>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
