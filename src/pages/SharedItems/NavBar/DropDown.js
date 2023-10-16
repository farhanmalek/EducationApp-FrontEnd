import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import axios from "axios";

export default function DropDown() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/studentprofile')
  }
  axios.defaults.withCredentials = true;
  const fetchLogout = async () => {
    try {
      await axios.get("http://localhost:5000/logout");
      window.location.reload(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    fetchLogout();
  };



  return (
    <>
  <div className={styles.dropDownContainer}>
    <p style={{ color: 'inherit', textDecoration: 'none' }} onClick={handleOnClick} > My Profile </p>
    <p>Settings</p>
    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/" onClick={handleLogout}> Log Out </Link>
  </div>;  
    </>)
}
