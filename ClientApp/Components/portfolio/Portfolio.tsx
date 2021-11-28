import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import { Button } from "react-bootstrap";
import axios from "axios";
import { v4 as uuid } from "uuid";
import PortfolioContext from "./PortfolioContext";
import {
  IPortfolioItemInput,
  IPortfolioSkillInput,
} from "../common/CommonInterfaces";
import PortfolioSkill from "./PortfolioSkillI";

function Portfolio() {
  const [portfolioItemList, setPortfolioItemList] = useState([]);
  const [portfolioSkillList, setPortfolioSkillList] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  useEffect(() => {
    axios.get("/assets/json/PortfolioItemList.json").then((res) => {
      setPortfolioItemList(res.data);
    });
    axios.get("/assets/json/PortfolioSkillList.json").then((res) => {
      console.log(res);
      setPortfolioSkillList(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(selectedTechnologies);
  }, [selectedTechnologies]);

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
              {portfolioSkillList.map(
                (portfolioSkill: IPortfolioSkillInput) => (
                  <PortfolioSkill
                    key={uuid()}
                    prefix={portfolioSkill.prefix}
                    name={portfolioSkill.name}
                    icon={portfolioSkill.icon}
                    slug={portfolioSkill.slug}
                  />
                )
              )}
            </div>
          </div>
          <div className="col-xl-8 col-md-6">
            <div className="row">
              {portfolioItemList.map((portfolioItem: IPortfolioItemInput) => (
                <PortfolioItem
                  key={uuid()}
                  images={portfolioItem.images}
                  title={portfolioItem.title}
                  link={portfolioItem.link}
                  year={portfolioItem.year}
                  type={portfolioItem.type}
                  technologies={portfolioItem.technologies}
                  description={portfolioItem.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioContext.Provider>
  );
}

export default Portfolio;
