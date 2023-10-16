import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./LogInPage.module.css"; // Importing the CSS module

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
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
      console.log(response);
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

  return (
    <>
      <div className={styles.form}>
        <h1>Login</h1>
        <form>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="someone@example.com"
              className={styles.formControl}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className={styles.formControl}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={styles.btnLogin}
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className={styles.displayMessage}>{message}</p>
          <p>
            Do you have an account? Create one here{" "}
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
