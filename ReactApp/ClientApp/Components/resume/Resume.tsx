import React, { useState, useEffect, SetStateAction } from "react";
import "./Resume.scss";
import { Button } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(pdf: SetStateAction<any>) {
    try {
      setNumPages(pdf._pdfInfo.numPages);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <div className="stars" />
      <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="my-3">
          <Button className="btn-outline-code-green mb-4" href="/">
            Return Home!
          </Button>
          <Document
            file="/assets/files/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className=""
          >
            <Page pageNumber={pageNumber} height={700} width={700} />
          </Document>
          <div className="d-flex align-items-center justify-content-between">
            <a
              href="/assets/files/resume.pdf"
              className="btn btn-outline-code-green d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faFileDownload} className="mb-0" />
              <span className="ms-2">Download Resume</span>
            </a>
            <p className="mb-0">{`Page ${pageNumber} of ${numPages}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
