import React, { useContext, useState } from "react";
import "./Portfolio.scss";
import { Image } from "../common/CommonInterfaces";
import { v4 as uuid } from "uuid";
import { IPortfolioCollapseItemInput } from "./Portfolio";
import { PortfolioContext } from "./PortfolioContext";

function PortfolioCollapseItem({
  description,
  images = [],
  title,
  link,
  technologies,
  type,
  year,
}: IPortfolioCollapseItemInput) {
  const { selectedTechnologies } = useContext(PortfolioContext);

  return (
    <div className="col-xl-6 mb-5">
      <div className="portfolio-item-block">
        <div className="d-flex align-items-center flex-wrap">
          {images.map((img: Image) => {
            const imgUuid = uuid();
            return (
              <img
                key={imgUuid}
                id={imgUuid}
                src={img.src}
                className="img portfolio-img-sneaky mb-3 me-3"
                width={img.width ?? "380px"}
                height={img.height ?? "210px"}
                alt={img.alt}
              />
            );
          })}
        </div>
        <h3>{link != null ? <a href={link}>{title}</a> : title}</h3>
        <div className="d-flex align-items-center justify-content-between">
          <span>{type}</span>
          <i>{year}</i>
        </div>
        <hr />
        {technologies != null ? (
          <div className="d-flex align-items-center flex-wrap mb-1">
            {technologies.map((technology: string) => {
              return (
                <span
                  key={uuid()}
                  className={
                    selectedTechnologies.includes(technology)
                      ? "badge bg-code-green text-dark fw-light rounded-pill me-1"
                      : "badge border-dashed border-code-green border-1 text-code-green fw-light rounded-pill me-1"
                  }
                >
                  {technology}
                </span>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <p className="fst-italic portfolio-description-block">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCollapseItem;
