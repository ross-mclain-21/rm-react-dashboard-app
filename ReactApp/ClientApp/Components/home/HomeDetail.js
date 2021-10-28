import React from "react";
import HomeDetailListItem from "./HomeDetailListItem";
import {
  faAt,
  faBriefcase,
  faEnvelope,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

function HomeDetail() {
  return (
    <div className="d-flex flex-column align-items-center my-3">
      <HomeDetailListItem
        faIcon={faBriefcase}
        text={"Senior DevOps Engineer"}
        faClasses="fa-1x"
      />
      <div className="ms-4">
        <HomeDetailListItem
          faIcon={faAt}
          text={"Tyler Technologies"}
          faClasses="small"
          textClasses="small"
          isLink="true"
          link="https://www.tylertech.com/"
        />
      </div>

      <span className="my-1" />
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
      <Button className="btn-outline-code-green mt-3" href="/portfolio">
        Portfolio
      </Button>
    </div>
  );
}

export default HomeDetail;
