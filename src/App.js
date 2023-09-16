import "./App.css"
import {Route, Routes} from "react-router-dom"
import NavBar from "./pages/SharedItems/NavBar/NavBar";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/projectlibrary" element = {<ProjectLibrary/>}/>
        {/* <Route path="/studentprofile" element = {<StudentProfile/>} */}
      </Routes>
      



    </div>
  );
}

export default App;
