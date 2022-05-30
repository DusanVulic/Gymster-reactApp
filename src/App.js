import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// PAGES

import Dashborad from "./pages/dashboard/Dashborad";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//auth context

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={user ? <Dashborad /> : <Login />}
              />
              <Route path="create" element={user ? <Create /> : <Login />} />
              <Route
                path="projects/:id"
                element={user ? <Project /> : <Login />}
              />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
