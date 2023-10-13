import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"

export default function DropDown() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/studentprofile')
  }
  return (
    <>
  <div className={styles.dropDownContainer}>
    <p style={{ color: 'inherit', textDecoration: 'none' }} onClick={handleOnClick} > My Profile </p>
    <p>Settings</p>
    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/"> Log Out </Link>
  </div>;  
    </>)
}
