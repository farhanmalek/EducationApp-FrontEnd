import styles from "./DropDown.module.css";
import { Link } from "react-router-dom";

export default function DropDown() {
  return (
  <div className={styles.dropDownContainer}>
    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="studentprofile"> My Profile </Link>
    <p>Settings</p>
    <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/"> Log Out </Link>
  </div>);
}
