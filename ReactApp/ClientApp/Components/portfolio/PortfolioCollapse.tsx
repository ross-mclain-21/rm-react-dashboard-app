import React, { useState } from "react";
import "./Portfolio.scss";
import { Button, Collapse } from "react-bootstrap";

interface PortfolioCollapseInput {
  collapseId: string;
  buttonText: string;
  innerComponent: any;
}

function PortfolioCollapse({
  collapseId,
  buttonText,
  innerComponent,
}: PortfolioCollapseInput) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <Button
          onClick={() => {
            setOpen(!open);
          }}
          aria-controls={collapseId}
          aria-expanded={open}
          variant="link"
        >
          <h4>{buttonText}</h4>
        </Button>
      </div>
      <Collapse in={open} className="portfolio-collapse">
        <div id={collapseId}>{innerComponent}</div>
      </Collapse>
    </>
  );
}

export default PortfolioCollapse;
