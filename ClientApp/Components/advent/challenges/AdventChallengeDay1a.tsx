import React, { useContext } from "react";
import "../Advent.scss";
import AdventContext from "../AdventContext";

function AdventChallengeDay1a() {
  const { selectedAdventData } = useContext(AdventContext);

  const solvePuzzle = (inputData: number[]) =>
    inputData.reduce((acc, v, i) => (acc += v < inputData[i + 1] ? 1 : 0), 0);

  return (
    <div className="flex-fill">
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Solution:</h5>
        <div className="px-3">
          <p className="color-code-green">
            There are <b>{solvePuzzle(selectedAdventData?.input ?? [])}</b>{" "}
            measurements that are larger than the previous measurement.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">
            {`const solvePuzzle = (inputData: number[]) =>
    inputData.reduce((acc, v, i) => (acc += v < inputData[i + 1] ? 1 : 0), 0);`}
          </pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small code mb-0">
            <li>
              Take in input array as :number[]. I took the data from the advent
              website and stored it as json
            </li>
            <li>
              Use Array.prototype.reduce() to use built-in functionality to add
              to the accumulated int if value is less than the next value in the
              array.
            </li>
            <li>
              This code only loops once through the array making this solution
              in Big O notation:
              <b>N</b>
            </li>
            <ul>
              <li>
                <i>
                  This is with an assumption that the Array.prototype.reduce()
                  function doesn't do any extra iterating.{" "}
                </i>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdventChallengeDay1a;
