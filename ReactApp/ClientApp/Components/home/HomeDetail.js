import React from "react";
import HomeDetailListItem from "./HomeDetailListItem";
import {
  faEnvelope,
  faHashtag,
  faGithub,
} from "@fortawesome/free-solid-svg-icons";

function HomeDetail() {
  return (
    <div className="d-flex flex-column my-3">
      <HomeDetailListItem
        faIcon={faEnvelope}
        text={"mclain.development@gmail.com"}
        faClasses="fa-1x"
      />
      <HomeDetailListItem
        faIcon={faHashtag}
        text={"1 (207) 420-6255"}
        faClasses="fa-1x"
      />

      <HomeDetailListItem
        faIcon={faGithub}
        text={"ross-mclain-21"}
        faClasses="fa-1x"
        isLink="true"
        link="https://github.com/ross-mclain-21/ross-mclain-21"
      />
    </div>
  );
}

export default HomeDetail;
