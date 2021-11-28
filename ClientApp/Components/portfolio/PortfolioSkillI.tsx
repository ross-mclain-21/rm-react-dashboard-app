import React, { useContext, useState } from "react";
import "./Portfolio.scss";
import PortfolioContext from "./PortfolioContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IPortfolioSkillInput } from "../common/CommonInterfaces";
import { IconLookup } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  findIconDefinition,
  Icon,
  IconPrefix,
} from "@fortawesome/fontawesome-svg-core";
import { IconName } from "@fortawesome/free-regular-svg-icons";

function PortfolioSkill({ name, slug, icon, prefix }: IPortfolioSkillInput) {
  const { selectedTechnologies, setSelectedTechnologies } =
    useContext(PortfolioContext);

  const icoDefinition: IconDefinition =
    icon != null
      ? findIconDefinition({
          prefix: prefix as IconPrefix,
          iconName: icon as IconName,
        })
      : ({} as IconDefinition);

  return (
    <div
      className="col-lg-4 portfolio-skill"
      onMouseEnter={() => {
        if (!selectedTechnologies.includes(slug)) {
          selectedTechnologies.push(slug);
          console.log(selectedTechnologies);
          setSelectedTechnologies([...selectedTechnologies]);
        }
      }}
      onMouseLeave={() => {
        if (selectedTechnologies.includes(slug)) {
          selectedTechnologies.splice(selectedTechnologies.indexOf(slug), 1);
          setSelectedTechnologies([...selectedTechnologies]);
        }
      }}
    >
      {icon != null ? (
        <FontAwesomeIcon icon={icoDefinition} className="skill-icon" />
      ) : (
        <span className="skill-icon">{name}</span>
      )}
    </div>
  );
}

export default PortfolioSkill;
