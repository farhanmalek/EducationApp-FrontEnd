import styles from "./ProjectLibrary.module.css";
import Filter from "./components/Filter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"; // Added useState
import NavBar from "../SharedItems/NavBar/NavBar";
import axios from "axios";

export default function ProjectLibrary() {
  // Add scroll to top functionality, onclick
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [filteredData, setFilteredData] = useState([]);
  const [selectSub, setSelectSub] = useState([]);
  const [selectDiff, setSelectDiff] = useState("");
  const [selectType, setSelectType] = useState([]);
  const [selectYear, setSelectYear] = useState([]);
  const [selectMatter, setSelectMatter] = useState([]);

  function handleDiff(e) {
    const difficulty = e.target.innerText.toLowerCase();
    setSelectDiff(difficulty);
  }

  //Fetch all projects on initial mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await axios.get("http://localhost:4000/projectlibrary");
        setFilteredData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    const submitCheckbox = async () => {
      try {
        const data = await axios.post("http://localhost:4000/projectlibrary/filter", {
          subscription: selectSub,
          activityType: selectType,
          subjectMatter: selectMatter,
          difficulty: selectDiff,
          yearLevel: selectYear
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });
  
        // Handle the response data here
        setFilteredData(data.data);
        console.log(filteredData)
      } catch (error) {
        // Handle errors here
        console.error('Error submitting checkboxes:', error);
      }
    };
  
    submitCheckbox();
  }, [selectSub, selectDiff, selectMatter, selectType, selectYear]);
  

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
              <div onClick={handleDiff}>BEGINNER</div>
              <div onClick={handleDiff}>INTERMEDIATE</div>
              <div onClick={handleDiff}>ADVANCED</div>
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
          {filteredData.map((project ) => (
                <div className={styles.projectCard} key={project.project_id}>
                  {" "}
                  {/* Added key */}
                  <Link to="/studentdashboard">
                    <img
                      src={project.project_pic}
                      alt={project.name}
                    />
                  </Link>
                  <h2>{project.name}</h2>
                  <div className={styles.projectDetails}>
                    <p>{project.course}</p>
                    <p>|</p>
                    <p>{project.subject_matter}</p>
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
      <Footer/>
    </>
  );
}
