import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../common/TypeWriter";

function HomeHeader() {
  return (
    <div className="d-flex align-items-center mb-3">
      <FontAwesomeIcon icon={faChevronRight} className="fa-6x" />
      <TypeWriter
        message={"Ross McLain"}
        classes="header-text"
        typingSpeed={200}
      />
      <div className="position-relative">
        <div className="position-absolute terminal-line">
          <FontAwesomeIcon icon={faMinus} className="fa-4x blink" />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
