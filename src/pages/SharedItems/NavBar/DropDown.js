import styles from "./DropDown.module.css";

export default function DropDown() {
  return (
  <div className={styles.dropDownContainer}>
    <p>My Profile</p>
    <p>Settings</p>
    <p>Log Out</p>  
  </div>);
}
