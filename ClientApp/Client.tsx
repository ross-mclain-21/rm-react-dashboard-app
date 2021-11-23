import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Client.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/home/Home";
import RouteNotFound from "./RouteNotFound";
import Portfolio from "./Components/portfolio/Portfolio";
import Resume from "./Components/resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Resume" component={Resume} />
        <Route render={() => <RouteNotFound />} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
