import React from "react";
import HomeDetailListItem from "./HomeDetailListItem";
import {
  faAt,
  faBriefcase,
  faEnvelope,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

function HomeDetail() {
  return (
    <div className="row my-3">
      <div className="col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-md-start align-items-center">
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
              isLink={true}
              link="https://www.tylertech.com/"
            />
          </div>

          <HomeDetailListItem
            faIcon={faEnvelope}
            text={"mclain.development@gmail.com"}
            faClasses="fa-1x"
            isLink={true}
            link="mailto:mclain.development@gmail.com"
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
            isLink={true}
            link="https://github.com/ross-mclain-21/ross-mclain-21"
          />
          <HomeDetailListItem
            faIcon={faLinkedin}
            text={"rossmclain21"}
            faClasses="fa-1x"
            isLink={true}
            link="https://www.linkedin.com/in/rossmclain21"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="col-md-6 d-flex flex-column align-items-center pt-md-2 pt-4"
      >
        <div className="d-flex flex-column">
          <Button className="btn-outline-code-green mb-3" href="/portfolio">
            Portfolio
          </Button>
          <Button className="btn-outline-code-green mb-3" href="/resume">
            Resume
          </Button>
          <Button className="btn-outline-code-red mb-3" href="/advent">
            Advent of Code 2021
          </Button>
          zi
        </div>
      </motion.div>
    </div>
  );
}

export default HomeDetail;
