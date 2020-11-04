import React from "react";
import "./styles/style2.css"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App({overskrift, id}) {

  return (
    <div>
      <Router>
        <div>
          <ul className="header">
            <li>
              <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>

          <h2>{overskrift}</h2>
          <h2>{id}</h2>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home id={id} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home({id}) {
  return (
    <div>
      <h2>Home</h2>
      <p>This is home</p>
      <p>{id}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
