import React, { useState } from "react";
import "./Portfolio.scss";
import { Image } from "../common/CommonInterfaces";
import { v4 as uuid } from "uuid";

interface PortfolioCollapseItemInput {
  description: string;
  images: Image[];
  title: string | object;
  technologies: string[];
  type?: string;
}

function PortfolioCollapseItem({
  description,
  images = [],
  title,
  technologies,
  type = "WEBSITE",
}: PortfolioCollapseItemInput) {
  return (
    <div className="row mb-5">
      <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
        {images.map((img: Image) => {
          const imgUuid = uuid();
          return (
            <img
              key={imgUuid}
              id={imgUuid}
              src={img.src}
              className="img-fluid portfolio-img-sneaky mb-3"
              width={img.width ?? "400px"}
              height={img.height ?? "50px"}
              alt={img.alt}
            />
          );
        })}
      </div>
      <div className="col-lg-6">
        <div className="portfolio-item-block">
          <h1>{title}</h1>
          <span>{type}</span>
          <hr />
          {technologies != null ? (
            <div className="d-flex align-items-center flex-wrap mb-1">
              {technologies.map((technology: string) => {
                return (
                  <span
                    key={uuid()}
                    className="badge border-dashed border-code-green border-1 text-code-green fw-light rounded-pill me-1"
                  >
                    {technology}
                  </span>
                );
              })}
            </div>
          ) : (
            <></>
          )}
          <p className="fst-italic portfolio-description-block">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCollapseItem;
