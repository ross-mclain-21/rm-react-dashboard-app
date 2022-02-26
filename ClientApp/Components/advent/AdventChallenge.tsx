import React, { lazy, useContext, useEffect, useState } from "react";
import "./Advent.scss";
import { useParams } from "react-router";
import AdventContext from "./AdventContext";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AdventChallenge() {
  let params = useParams();
  const adventId: string = params["adventId"] ?? "0";

  const { adventData, selectedAdventData, setSelectedAdventData } =
    useContext(AdventContext);

  const [adventChallengeSpecificView, setAdventChallengeSpecificView] =
    useState(<></>);

  useEffect(() => {
    console.log("Set Selected Advent data");

    adventData.forEach((value) => {
      if (value.id.toString() === adventId) {
        setSelectedAdventData(value);
      }
    });
  }, [adventId, adventData, setSelectedAdventData]);

  const importView = (adventChallengeViewIdentifier: string) =>
    lazy(() =>
      import(
        `./challenges/AdventChallengeDay${adventChallengeViewIdentifier}`
      ).catch(() => import(`./challenges/AdventChallengeDefault`))
    );

  useEffect(() => {
    console.log("Import view based on advent id");

    async function loadAdventChallengeView() {
      const componentPromise = async () => {
        const View = await importView(selectedAdventData?.identifier ?? "");
        return (
          <View key={`challenge-view-${selectedAdventData?.identifier}`} />
        );
      };

      componentPromise().then(setAdventChallengeSpecificView);
    }

    loadAdventChallengeView().then(() =>
      console.log("Finished Loading Challenge View!")
    );
  }, [selectedAdventData]);

  return (
    <>
      <div className="mb-3">
        <Link className="btn btn-outline-code-green" to="/advent">
          Return To Puzzles!
        </Link>
      </div>
      {selectedAdventData == null ? (
        <></>
      ) : (
        <div
          key={selectedAdventData.id}
          className="d-flex flex-column flex-fill p-3"
        >
          <p className="mb-2">
            <span>
              {"[Problem "}
              {selectedAdventData.identifier}
              {"] "}
            </span>
            {selectedAdventData?.success ? (
              <FontAwesomeIcon icon={faStar} className="gold-star" />
            ) : (
              <></>
            )}
          </p>
          {selectedAdventData?.link != null ? (
            <a
              href={selectedAdventData?.link}
              target="_blank"
              className="h4 fw-bold"
            >
              {selectedAdventData.name}
            </a>
          ) : (
            <h4 className="fw-bold">{selectedAdventData.name}</h4>
          )}
          <div className="d-flex flex-column mt-2">
            <h5 className="mb-2">Problem Description:</h5>
            <p className="px-3 mb-3 white-space-pre-line small">
              {selectedAdventData.description}
            </p>
          </div>

          <div className="d-flex flex-column">
            {
              <React.Suspense fallback="Loading Challenge...">
                <div>{adventChallengeSpecificView}</div>
              </React.Suspense>
            }
          </div>
        </div>
      )}
    </>
  );
}

export default AdventChallenge;
