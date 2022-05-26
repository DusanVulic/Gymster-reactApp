import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route exact path="/">
              <Dashborad />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
