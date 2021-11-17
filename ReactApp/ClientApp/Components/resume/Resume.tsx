import React from "react";
import "./Resume.scss";
import { Button } from "react-bootstrap";

function Resume() {
  return (
    <>
      <div className="stars" />
      <div className="container d-flex flex-column justify-content-center my-5">
        <div className="my-3">
          <Button className="btn-outline-code-green" href="/">
            Return Home!
          </Button>
        </div>
      </div>
    </>
  );
}

export default Resume;
