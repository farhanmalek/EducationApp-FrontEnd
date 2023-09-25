import React from 'react';
import styles from "../ProjectLibrary.module.css";
import Checkbox from "./Checkbox";

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.subscription}>
        <p>SUBSCRIPTION</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
            className={styles.filterItem}
            name="Free"
          />

          <Checkbox
            className={styles.filterItem}
            name="Premium"
          />
        </div>
      </div>

      <div className={styles.activityType}>
        <p>ACTIVITY TYPE</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
            className={styles.filterItem}
            name="Animation"
          />

          <Checkbox
            className={styles.filterItem}
            name="Game"
          />

          <Checkbox
            className={styles.filterItem}
            name="Chatbot"
          />

          <Checkbox
            className={styles.filterItem}
            name="Augmented Reality"
          />
        </div>
      </div>

      <div className={styles.yearLevel}>
        <p>YEAR LEVEL</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
            className={styles.filterItem}
            name="1-4"
          />

          <Checkbox
            className={styles.filterItem}
            name="5-6"
          />

          <Checkbox
            className={styles.filterItem}
            name="7-8"
          />

          <Checkbox
            className={styles.filterItem}
            name="9-13"
          />
        </div>
      </div>

      <div className={styles.subjectMatter}>
        <p>Subject Matter</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
            className={styles.filterItem}
            name="Computer Science"
          />

          <Checkbox
            className={styles.filterItem}
            name="Maths"
          />

          <Checkbox
            className={styles.filterItem}
            name="Science"
          />

          <Checkbox
            className={styles.filterItem}
            name="Language"
          />

          <Checkbox
            className={styles.filterItem}
            name="Art"
          />

          <Checkbox
            className={styles.filterItem}
            name="Music"
          />
        </div>
      </div>
    </div>
  );
}
