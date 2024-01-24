import {Route, BrowserRouter, Routes} from "react-router-dom";
import './App.css';
import Home from "./content/Home";
import Skill from "./content/Skill";
import Project from "./content/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
