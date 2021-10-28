import React from "react";
import { Route } from "react-router-dom";
import "./RouteNotFound.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinBeamSweat } from "@fortawesome/free-solid-svg-icons";

function RouteNotFound() {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = 404;
        }
        return (
          <>
            <div className="stars" />
            <div className="route-not-found-container">
              <div className="row h-100">
                <div className="col-lg-6 d-lg-flex d-none d-flex flex-column align-items-center justify-content-center">
                  <h1 className="four-oh-four-text fw-bold">404</h1>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <h1 className="four-oh-four-text fw-bold d-lg-none d-block">
                    404
                  </h1>
                  <FontAwesomeIcon
                    icon={faGrinBeamSweat}
                    className="fa-8x mb-4"
                  />
                  <h1>OOPS!</h1>
                  <p>We can't seem to find the page you're looking for.</p>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
}

export default RouteNotFound;
