import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeWriter from "../common/TypeWriter";

function HomeDetailListItem({
  faIcon,
  text,
  faClasses = "fa-2x",
  textClasses = "",
  isLink = false,
  link = "",
}) {
  return (
    <>
      {isLink === false ? (
        <div className="d-flex align-items-center my-2">
          <div className="me-2 d-flex">
            <FontAwesomeIcon icon={faIcon} className={faClasses} />
          </div>
          <TypeWriter message={text} typingSpeed={50} classes={textClasses} />
        </div>
      ) : (
        <a
          href={link}
          target="_blank"
          className="d-flex align-items-center my-2"
        >
          <div className="me-2 d-flex">
            <FontAwesomeIcon icon={faIcon} className={faClasses} />
          </div>
          <TypeWriter message={text} typingSpeed={50} classes={textClasses} />
        </a>
      )}
    </>
  );
}

export default HomeDetailListItem;
