
import { Route, Routes } from 'react-router-dom';
import NavBar from "./pages/SharedItems/NavBar/NavBar";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import React from "react"
import Footer from './pages/SharedItems/Footer/Footer'
import Home from "./pages/HomePage/Home"




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/projectlibrary" element = {<ProjectLibrary/>}/>
        <Route path="/studentprofile" element = {<StudentProfileViewer/>}/>
        <Route path="/" element={<Home />} />

      </Routes>

      <Home/>
      
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
