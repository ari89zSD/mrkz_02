import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./view/Header";
import Home from "./view/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
