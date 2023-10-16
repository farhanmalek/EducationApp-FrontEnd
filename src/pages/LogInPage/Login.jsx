import React from "react";
import styles from "../LogInPage/Login.module.css";
import esc from "../../assets/LoginSignup/esc.png";
import students from "../../assets/LoginSignup/students.png";
import teachers from "../../assets/LoginSignup/teachers.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login({ setShowModal, setLoginModal, loginModal,showModal}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [signUpModal, setSignUpModal] = useState(false);
  axios.defaults.withCredentials = true;

  function handleSubmit(e) {
    e.preventDefault();
    loginUser();
  }

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
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

  const handleSignUp = () => {
    setSignUpModal(true);
    setLoginModal(false);

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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            {signUpModal ? (
              <button
                type="submit"
                className={styles.inputButton}
                onClick={handleSubmit}
              >
                SignUp
              </button>
            ) : (
              <button
                type="submit"
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            {signUpModal ? (
              <button
                type="submit"
                className={styles.inputButton}
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            ) : (
              <button
                type="submit"
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
