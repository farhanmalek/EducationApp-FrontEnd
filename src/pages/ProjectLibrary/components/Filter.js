
import styles from "../ProjectLibrary.module.css";
import Checkbox from "./Checkbox";

export default function Filter(
  {selectSub,
setSelectSub,
selectDiff,
setSelectDiff,
selectType,
setSelectType,
selectYear,
setSelectYear,
selectMatter,
setSelectMatter}) {

  function handleCheckBoxChange(name) {

    if ((name === "Free") || (name === "Premium")) {
      if (selectSub.includes(name)) {
        const filter = selectSub.filter((item) => item !== name)
        setSelectSub(filter)
      } else {
        setSelectSub([...selectSub, name])
      }
    }

    if ((name === "Animation") || (name === "Game") || (name === "Chatbot") || (name === "Augmented Reality")) {
      if (selectType.includes(name)) {
        const filter = selectType.filter((item) => item !== name)
        setSelectType(filter)
      } else {
        setSelectType([...selectType, name])
      }
    }

    if ((name === "1-4") || (name === "5-6") || (name === "7-8") || (name === "9-13")) {
      if (selectYear.includes(name)) {
        const filter = selectYear.filter((item) => item !== name)
        setSelectYear(filter)
      } else {
        setSelectYear([...selectYear, name])
      }
    }

    
    if ((name === "Computer Science") || (name === "Maths") || (name === "Science") || (name === "Language") || (name === "Art") || (name === "Music")) {
      if (selectMatter.includes(name)) {
        const filter = selectMatter.filter((item) => item !== name)
        setSelectMatter(filter)
      } else {
        setSelectMatter([...selectMatter, name])
      }
    }

    if ((name === "Beginner") || (name === "Intermediate") || (name === "Advanced")) {
      if (selectDiff.includes(name)) {
        const filter = selectDiff.filter((item) => item !== name)
        setSelectDiff(filter)
      } else {
        setSelectDiff([...selectDiff, name])
      }
    }
  }


  return (
    <div className={styles.filterContainer}>
      <div className={styles.subscription}>
        <p>SUBSCRIPTION</p>
        <div className={styles.checkboxContainer}>
          <Checkbox 
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Free"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Premium"
          />
        </div>
      </div>

      <div className={styles.activityType}>
        <p>ACTIVITY TYPE</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Animation"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Game"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Chatbot"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Augmented Reality"
          />
        </div>
      </div>

      <div className={styles.yearLevel}>
        <p>YEAR LEVEL</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="1-4"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="5-6"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="7-8"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="9-13"
          />
        </div>
      </div>

      <div className={styles.subjectMatter}>
        <p>Subject Matter</p>
        <div className={styles.checkboxContainer}>
          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Computer Science"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Maths"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Science"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Language"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Art"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Music"
          />
        </div>
      </div>
    </div>
  );
}
