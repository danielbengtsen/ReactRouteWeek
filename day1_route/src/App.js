import React from "react";
import "./styles/style2.css"; 
import AppEx1 from "./ex-1/AppEx1";
import AppEx2 from "./ex-2/AppEx2";
import AppEx3 from "./ex-3/AppEx3";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

export default function App({overskrift, id}) {

  return (
    <div>
      <Router>
        <div>
          <Header />

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home id={id} />
              </Route>
              <Route path="/ex-1">
                <Exercise1 />
              </Route>
              <Route path="/ex-2">
                <Exercise2 />
              </Route>
              <Route path="/ex-3">
                <Exercise3 />
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
      <hr />
      <p>This is home</p>
      <p>{id}</p>
    </div>
  );
}

function Exercise1() {
  return (
    <div>
      <div>
        <h2>Exercise 1</h2>
      </div>
      <hr />
      <div>
        <AppEx1 />
      </div>
    </div>
  );
}

function Exercise2() {
  return (
    <div>
      <div>
        <h2>Exercise 2</h2>
      </div>
      <hr />
      <div>
        <AppEx2 />
      </div>
    </div>
  );
}

function Exercise3() {
  return (
    <div>
      <div>
        <h2>Exercise 3</h2>
      </div>
      <hr />
      <div>
        <AppEx3 />
      </div>
    </div>
  );
}

function Header()
{
  return(
    <ul className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/ex-1">Exercise 1</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/ex-2">Exercise 2</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/ex-3">Exercise 3</NavLink>
      </li>
    </ul>
  );
}
