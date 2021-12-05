import React, { lazy, useContext, useEffect, useState } from "react";
import "./Advent.scss";
import { useParams } from "react-router";
import AdventContext from "./AdventContext";
import { Button } from "react-bootstrap";

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
        <Button className="btn-outline-code-red" href="/advent">
          Return To Puzzles!
        </Button>
      </div>
      {selectedAdventData == null ? (
        <></>
      ) : (
        <div
          key={selectedAdventData.id}
          className="d-flex flex-column flex-fill p-3"
        >
          {selectedAdventData?.link != null ? (
            <a
              href={selectedAdventData?.link}
              target="_blank"
              className="h4 fw-bold"
            >
              {"[Day "}
              {selectedAdventData.id}
              {"] "}
              {selectedAdventData.name}
            </a>
          ) : (
            <h4 className="fw-bold">
              {"[Day "}
              {selectedAdventData.id}
              {"] "}
              {selectedAdventData.name}
            </h4>
          )}
          <div className="d-flex flex-column">
            <h5 className="mb-2">Problem Description:</h5>
            <p className="px-3 mb-3 white-space-pre-line small">
              {selectedAdventData.description}
            </p>
          </div>
          <div className="d-flex flex-column">
            <h5 className="mb-2">Problem Input:</h5>
            <div className="px-3 small">
              <p className="small data-box">
                {selectedAdventData.input.join(", ")}
              </p>
            </div>
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
