
import { Route, Routes } from 'react-router-dom';
import NavBar from "./pages/SharedItems/NavBar/NavBar";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import React from "react"
import Footer from './components/Footer/Footer'
import Home from "./components/Home/Home"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/projectlibrary" element = {<ProjectLibrary/>}/>
        <Route path="/studentprofile" element = {<StudentProfileViewer/>}/>
      </Routes>

   
      
    </div>
  );
}

export default App;
