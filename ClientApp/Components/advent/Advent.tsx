import React, { useEffect, useState } from "react";
import "./Advent.scss";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { IAdventChallenge } from "../common/CommonInterfaces";
import AdventContext from "./AdventContext";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Advent() {
  let params = useParams();
  const adventId = params["adventId"];

  const adventDataDefault: IAdventChallenge[] = [];
  const [adventData, setAdventData] =
    useState<IAdventChallenge[]>(adventDataDefault);

  const [selectedAdventData, setSelectedAdventData] = useState<
    IAdventChallenge | undefined
  >(undefined);

  useEffect(() => {
    console.log("Load Challenge Data");

    axios
      .get(`/assets/json/AdventChallengeData.json`)
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        return null;
      })
      .then((res) => {
        try {
          setAdventData(res?.data ?? []);
          console.log("Setting Challenge Data");
        } catch (e) {
          console.error(e);
        }
      });
  }, []);

  return (
    <AdventContext.Provider
      value={{
        adventData,
        setAdventData,
        selectedAdventData,
        setSelectedAdventData,
      }}
    >
      <div className="advent-container d-flex flex-column flex-fill p-md-5 p-3">
        {adventId == null ? (
          <>
            <div className="mb-5">
              <Button className="btn-outline-code-green" href="/">
                Return Home!
              </Button>
            </div>
            <h1 className="header-text-sm">Advent of Code 2021</h1>
            <div className="d-flex flex-column align-items-center justify-content-center p-3">
              <a
                href="https://adventofcode.com/2021/about"
                target="_blank"
                className="mb-3"
              >
                https://adventofcode.com/2021/about
              </a>
              <p className="mb-0">
                Advent of Code is an Advent calendar of small programming
                puzzles for a variety of skill sets and skill levels that can be
                solved in any programming language. I personally am solving them
                in js and displaying them here. The next puzzle unlocks on each
                day of december and when I accomplish them I will update this
                page!
              </p>
            </div>

            <div className="px-3">
              <h5>Accomplished Puzzles:</h5>
              <div className="row">
                {adventData.map((value) => {
                  return (
                    <div
                      key={value.identifier}
                      className="col-md-1 col-sm-3 col-4 mb-3 d-flex align-items-center justify-content-center"
                    >
                      <a
                        href={
                          adventId === value.id.toString()
                            ? "/advent/"
                            : `/advent/${value.id}`
                        }
                        className={`btn ${
                          adventId === value.id.toString()
                            ? "btn-outline-code-green"
                            : "btn-code-green"
                        } rounded advent-index flex-fill position-relative`}
                      >
                        <div className={"earned-star"}>
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                        {value.identifier}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <Outlet />
      </div>
    </AdventContext.Provider>
  );
}

export default Advent;
