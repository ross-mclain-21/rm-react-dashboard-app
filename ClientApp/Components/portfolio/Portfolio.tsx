import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioCollapseItem from "./PortfolioCollapseItem";
import { Button } from "react-bootstrap";
import { Image } from "../common/CommonInterfaces";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faDocker,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
  faSass,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { PortfolioContext } from "./PortfolioContext";

export interface IPortfolioCollapseItemInput {
  description: string;
  images: Image[];
  title: string;
  link?: string;
  technologies: string[];
  type: string;
  year: number;
}

function Portfolio() {
  const [portfolioItemList, setPortfolioItemList] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  useEffect(() => {
    axios.get("/assets/json/PortfolioItemList.json").then((res) => {
      setPortfolioItemList(res.data);
    });
  }, []);

  return (
    <PortfolioContext.Provider
      value={{ selectedTechnologies, setSelectedTechnologies }}
    >
      <div className="stars" />
      <div className="my-5 p-5">
        <div className="mb-5">
          <Button className="btn-outline-code-green" href="/">
            Return Home!
          </Button>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="row portfolio-skill-list">
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faJsSquare} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faReact} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <div className="skill-icon d-flex align-items-start">
                  <span>C</span>
                  <small>#</small>
                </div>
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faSass} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faDocker} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faNode} className="skill-icon" />
              </div>
              <div className="col-lg-4 portfolio-skill">
                <FontAwesomeIcon icon={faUnity} className="skill-icon" />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-6">
            <div className="row">
              {portfolioItemList.map(
                (portfolioItem: IPortfolioCollapseItemInput) => (
                  <PortfolioCollapseItem
                    key={uuid()}
                    images={portfolioItem.images}
                    title={portfolioItem.title}
                    link={portfolioItem.link}
                    year={portfolioItem.year}
                    type={portfolioItem.type}
                    technologies={portfolioItem.technologies}
                    description={portfolioItem.description}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </PortfolioContext.Provider>
  );
}

export default Portfolio;
