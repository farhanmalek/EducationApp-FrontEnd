import styles from "./ProjectLibrary.module.css";
import { useState } from "react";

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.subscription}>
        <p>SUBSCRIPTION</p>
        <div className={styles.checkboxContainer}>
          <div className={styles.filterItem}>
            <input type="checkbox" id="free" />
            <label htmlFor="free">Free</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="premium" />
            <label htmlFor="premium">Premium</label>
          </div>
        </div>
      </div>

      <div className={styles.activityType}>
        <p>ACTIVITY TYPE</p>
        <div className={styles.checkboxContainer}>
          <div className={styles.filterItem}>
            <input type="checkbox" id="animation" />
            <label htmlFor="animation">Animation</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="game" />
            <label htmlFor="game">Game</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="chatbot" />
            <label htmlFor="chatbot">Chatbot</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="augmented reality" />
            <label htmlFor="augmented reality">Augmented reality</label>
          </div>
        </div>
      </div>

      <div className={styles.yearLevel}>
        <p>YEAR LEVEL</p>
        <div className={styles.checkboxContainer}>
          <div className={styles.filterItem}>
            <input type="checkbox" id="1-4" />
            <label htmlFor="1-4">1-4</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="5-6" />
            <label htmlFor="5-6">5-6</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="7-8" />
            <label htmlFor="7-8">7-8</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="9-13" />
            <label htmlFor="9-13">9-13</label>
          </div>
        </div>
      </div>

      <div className={styles.subjectMatter}>
        <p>Subject Matter</p>
        <div className={styles.checkboxContainer}>
          <div className={styles.filterItem}>
            <input type="checkbox" id="computer-science" />
            <label htmlFor="computer-science">Computer Science</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="maths" />
            <label htmlFor="maths">Maths</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="science" />
            <label htmlFor="science">Science</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="language" />
            <label htmlFor="language">Language</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="Art" />
            <label htmlFor="Art">Art</label>
          </div>

          <div className={styles.filterItem}>
            <input type="checkbox" id="music" />
            <label htmlFor="music">Music</label>
          </div>
        </div>
      </div>
    </div>
  );
}

