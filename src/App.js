import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES

import Dashborad from "./pages/dashboard/Dashborad";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="container">
          <Navbar />
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
