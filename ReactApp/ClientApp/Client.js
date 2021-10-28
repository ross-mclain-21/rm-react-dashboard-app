import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Client.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/home/Home";
import RouteNotFound from "./RouteNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
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
