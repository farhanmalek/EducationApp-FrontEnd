
import styles from "../ProjectLibrary.module.css";
import Checkbox from "./Checkbox";

export default function Filter(
  {selectSub,
setSelectSub,
selectType,
setSelectType,
selectYear,
setSelectYear,
selectMatter,
setSelectMatter}) {


  function handleCheckBoxChange(name,values) {

    if ((name === "Free") || (name === "Premium")) {
      if (selectSub.includes(values)) {
        const filter = selectSub.filter((item) => item !== values)
        setSelectSub(filter)
      } else {
        setSelectSub([...selectSub, values])
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
    //Set year into year array, store values such as [[1,4],[5,6]] etc.
    if ((name === "1-4") || (name === "5-6") || (name === "7-8") || (name === "9-13")) {
      const targetArray = values;
      if (selectYear.some(subarray => JSON.stringify(subarray) === JSON.stringify(targetArray))) {
        const filter = selectYear.filter((subarray) => JSON.stringify(subarray) !== JSON.stringify(targetArray))
        setSelectYear(filter)
      } else {
        setSelectYear([...selectYear, values])
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
            values ="0"
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="Premium"
            values="1"
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
            values={[1,4]}
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="5-6"
            values={[5,6]}
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="7-8"
            values={[7,8]}
          />

          <Checkbox
          handleCheckBoxChange = {handleCheckBoxChange}
            className={styles.filterItem}
            name="9-13"
            values={[9,13]}
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
