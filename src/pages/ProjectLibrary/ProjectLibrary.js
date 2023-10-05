import styles from "./ProjectLibrary.module.css";
import Filter from "./components/Filter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; // Added useState
import data from "./data";
import NavBar from "../SharedItems/NavBar/NavBar";

export default function ProjectLibrary() {
  // Add scroll to top functionality, onclick
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [filteredData, setFilteredData] = useState(data);
  const [selectSub, setSelectSub] = useState([]);
  const [selectDiff, setSelectDiff] = useState("");
  const [selectType, setSelectType] = useState([]);
  const [selectYear, setSelectYear] = useState([]);
  const [selectMatter, setSelectMatter] = useState([]);
  const [toggleDiff, setToggleDiff] = useState({
    beginner: true,
    intermediate: true,
    advanced: true,
  });

  const filterItems = () => {
    const filteredProjects = data.filter((project) => {
      const subMatch =
        selectSub.length === 0 || selectSub.includes(project.subscription);
      const typeMatch =
        selectType.length === 0 || selectType.includes(project.type);
      const matterMatch =
        selectMatter.length === 0 || selectMatter.includes(project.subject);
      const diffMatch =
        !selectDiff || selectDiff === project.difficulty.toLowerCase();
      return subMatch && typeMatch && matterMatch && diffMatch;
    });
    setFilteredData(filteredProjects);
  };

  useEffect(() => {
    filterItems();
  }, [selectSub, selectDiff, selectType, selectMatter]);

  function handleDiffChange(e) {
    const difficulty = e.target.innerText.toLowerCase();
    setToggleDiff((prevToggleDiff) => ({
      ...prevToggleDiff,
      beginner: !prevToggleDiff.beginner, intermediate: !prevToggleDiff.intermediate, advanced: !prevToggleDiff.advanced
    }));
    console.log(toggleDiff)
    if (toggleDiff) {
      setSelectDiff(difficulty);
    } else {
      setSelectDiff("")
    }
  }

  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}>
        <Filter
          selectSub={selectSub}
          setSelectSub={setSelectSub}
          selectType={selectType}
          setSelectType={setSelectType}
          selectYear={selectYear}
          setSelectYear={setSelectYear}
          selectMatter={selectMatter}
          setSelectMatter={setSelectMatter}
        />
        <div className={styles.contentBox}>
          <h1>Projects</h1>
          <h3>
            Welcome to the project library. You can use the filters on the left
            to help you search for specific projects
          </h3>
          <div className={styles.filterButtons}>
            <div className={styles.filterButtonsLevel}>
              <div onClick={handleDiffChange}>BEGINNER</div>
              <div onClick={handleDiffChange}>INTERMEDIATE</div>
              <div onClick={handleDiffChange}>ADVANCED</div>
            </div>
            <div className={styles.filterProjectsDisplayed}>
              <h6>SHOW</h6>
              <div className={styles.filterSelector}>
                <div>5</div>
                <div>10</div>
                <div>All</div>
              </div>
            </div>
          </div>
          <div className={styles.displayProjects}>
            {filteredData.map(
              (
                project // Moved the mapping function here
              ) => (
                <div className={styles.projectCard} key={project.id}>
                  {" "}
                  {/* Added key */}
                  <Link to="/studentdashboard">
                    <img
                      src={process.env.PUBLIC_URL + project.image}
                      alt={project.name}
                    />
                  </Link>
                  <h2>{project.name}</h2>
                  <div className={styles.projectDetails}>
                    <p>{project.difficulty}</p>
                    <p>|</p>
                    <p>{project.type}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <button className={styles.backToTopButton} onClick={handleBackToTop}>
        Back To Top
      </button>
    </>
  );
}
