import React, { useState } from "react";
import "./Portfolio.scss";
import { Image } from "../common/CommonInterfaces";

interface PortfolioCollapseItemInput {
  description: string;
  images: Image[];
  title: string | object;
  technologies: string;
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
        {images.map((img: Image) => (
          <img
            src={img.src}
            className="img-fluid portfolio-img-sneaky mb-3"
            width={img.width ?? "400px"}
            height={img.height ?? "50px"}
            alt={img.alt}
          />
        ))}
      </div>
      <div className="col-lg-6">
        <div className="portfolio-item-block">
          <h1>{title}</h1>
          <span>{type}</span>
          <hr />
          {technologies != null ? (
            <p className="fw-bold small">{technologies}</p>
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
