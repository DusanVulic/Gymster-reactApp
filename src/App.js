import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES

import Dashborad from "./components/dashboard/Dashborad";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import Project from "./components/project/Project";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashborad />} />
            <Route path="create" element={<Create />} />
            <Route path="projects/:id" element={<Project />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
