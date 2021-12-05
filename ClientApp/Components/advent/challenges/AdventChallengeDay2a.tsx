import React, { useContext } from "react";
import "../Advent.scss";
import AdventContext from "../AdventContext";
import { adventDay2Data, IAdventDay2Data } from "../data/AdventDataSource";

function AdventChallengeDay1b() {
  const solvePuzzle = (inputData: IAdventDay2Data[]) => {
    let horizontalPosition: number = 0;
    let depth: number = 0;

    inputData.forEach((v, i) => {
      switch (v.command) {
        case "forward":
          horizontalPosition += v.delta;
          break;
        case "up":
          depth -= v.delta;
          break;
        case "down":
          depth += v.delta;
          break;
      }
    });

    return [horizontalPosition, depth];
  };

  const [horizontalPosition, depth] = solvePuzzle(adventDay2Data);
  return (
    <div className="flex-fill">
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Input:</h5>
        <div className="px-3 small">
          <p className="small data-box">
            {adventDay2Data
              .map((value) => `{${value.command}:${value.delta}}`)
              .join(", ")}
          </p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Solution:</h5>
        <div className="px-3">
          <p className="color-code-green">
            After running the commands given, the horizontal position is:{" "}
            {horizontalPosition} and the depth is: {depth}. When multiplied
            together we get <b>{horizontalPosition * depth}</b>.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">{`const solvePuzzle = (inputData: IAdventDay2Data[]) => {
    let horizontalPosition: number = 0;
    let depth: number = 0;

    inputData.forEach((v, i) => {
      switch (v.command) {
        case "forward":
          horizontalPosition += v.delta;
          break;
        case "up":
          depth -= v.delta;
          break;
        case "down":
          depth += v.delta;
          break;
      }
    });

    return [horizontalPosition, depth];
  };`}</pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small code mb-0">
            <li>Take in input array as :{`<string,number>[]`}.</li>
            <li>
              Loop over each command and add forward or up/down to the depth.
            </li>
            <li>
              This code only loops once through the array making this solution
              in Big O notation:
              <b>N</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdventChallengeDay1b;
