import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {App} from './App';
import './App.scss';

export default function Router() {
  return (
    <BrowserRouter>
      <div >
        <nav >
          <ul className="nav-bar-container">
            <li>
              <Link className="nav-item" to="/">Tasks</Link>
            </li>
            <li>
              <Link className="nav-item" to="/41">Project 41</Link>
            </li>
            <li>
              <Link className="nav-item" to="/714">Project 714</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/41">
            <Pro41 />
          </Route>
          <Route path="/714">
            <Pro714 />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Pro41() {
  return <h2>Project 41</h2>;
}

function Pro714() {
  return <h2>Project 714</h2>;
}