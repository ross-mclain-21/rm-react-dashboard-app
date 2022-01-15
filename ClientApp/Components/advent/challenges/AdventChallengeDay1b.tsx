import React from "react";
import "../Advent.scss";
import { adventDay1Data } from "../data/AdventDataSource";

function AdventChallengeDay1b() {
  const solvePuzzle = (inputData: number[]) =>
    inputData.reduce(
      (acc, v, i) =>
        (acc +=
          inputData[i] + inputData[i + 1] + inputData[i + 2] <
          inputData[i + 1] + inputData[i + 2] + inputData[i + 3]
            ? 1
            : 0),
      0
    );

  return (
    <div className="flex-fill">
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Input:</h5>
        <div className="px-3 small">
          <p className="small data-box">{adventDay1Data.join(", ")}</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Solution:</h5>
        <div className="px-3">
          <p className="color-code-green">
            There are <b>{solvePuzzle(adventDay1Data)}</b> larger "window"
            measurements when grouping the data by 3 concurrent data points
            instead of checking each item separately.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">
            {`const solvePuzzle = (inputData: number[]) =>
    inputData.reduce(
      (acc, v, i) =>
        (acc +=
          inputData[i] + inputData[i + 1] + inputData[i + 2] <
          inputData[i + 1] + inputData[i + 2] + inputData[i + 3]
            ? 1
            : 0),
      0
    );`}
          </pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small mb-0">
            <li>
              Take in input array as :number[]. I took the data from the advent
              website and stored it as json
            </li>
            <li>
              Use Array.prototype.reduce() to use built-in functionality to add
              to the accumulated int if the sum of the first "window" aka 3
              concurrent data points for ex. A (151, 152, 153) was less than the
              sum of the second "window" one index to the right B (152, 153,
              158). In this example it is clear that the sum of A is less than B
              so that "window is marked as an increase!
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

export default AdventChallengeDay1b;
