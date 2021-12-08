import React from "react";
import "../Advent.scss";
import { adventDay2Data, IAdventDay2Data } from "../data/AdventDataSource";

function AdventChallengeDay2b() {
  const solvePuzzle = (inputData: IAdventDay2Data[]) => {
    let horizontalPosition: number = 0;
    let depth: number = 0;
    let aim: number = 0;

    inputData.forEach((v, i) => {
      switch (v.command) {
        case "forward":
          horizontalPosition += v.delta;
          depth += aim * v.delta;
          break;
        case "up":
          aim -= v.delta;
          break;
        case "down":
          aim += v.delta;
          break;
      }
    });

    return [horizontalPosition, depth, aim];
  };

  const [horizontalPosition, depth, aim] = solvePuzzle(adventDay2Data);
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
            {horizontalPosition} and the depth is: {depth} and the current aim
            is: {aim}. When multiplied together we get{" "}
            <b>{horizontalPosition * depth}</b>.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">{`const solvePuzzle = (inputData: IAdventDay2Data[]) => {
    let horizontalPosition: number = 0;
    let depth: number = 0;
    let aim: number = 0;

    inputData.forEach((v, i) => {
      switch (v.command) {
        case "forward":
          horizontalPosition += v.delta;
          depth += aim * v.delta;
          break;
        case "up":
          aim -= v.delta;
          break;
        case "down":
          aim += v.delta;
          break;
      }
    });

    return [horizontalPosition, depth, aim];
  };`}</pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small code mb-0">
            <li>Take in input array as :{`<string,number>[]`}.</li>
            <li>
              Loop over each command and add forward and use aim to determine
              depth instead of simply going up/down.
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

export default AdventChallengeDay2b;
