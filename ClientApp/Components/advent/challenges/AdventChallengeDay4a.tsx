import React from "react";
import "../Advent.scss";
import { adventDay4Data, IAdventDay4Data } from "../data/AdventDataSource";
import AdventChallengeBingoBoard from "./components/AdventChallengeBingoBoard";

function AdventChallengeDay4a() {
  const solvePuzzle = (inputData: IAdventDay4Data) => {
    return null;
  };
  const result = solvePuzzle(adventDay4Data);
  return (
    <div className="flex-fill">
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Input:</h5>
        <div className="px-3 small">
          <span>Randomly Selected Numbers:</span>
          <p className="small data-box">
            {adventDay4Data.randomSelectedNumbers.join(", ")}
          </p>
          <hr />
          <span>Bingo Boards:</span>
          <div className="small data-box data-box-lg">
            <div className="row">
              {adventDay4Data.bingoBoards.map((value: number[][], index) => (
                <AdventChallengeBingoBoard key={index} bingo={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Solution:</h5>
        <div className="px-3">
          <p className="color-code-green"></p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">{``}</pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small mb-0">
            <li>Take in binary code input array as :{`<string>[]`}.</li>
            <li>
              Loop over each binary number, turning it into a char array and
              adding each bit to a map of{" "}
              {`<index, array of bits at that index across all binary numbers>`}
              .
            </li>
            <li>
              Once we have a map of all bits at each index, we can then
              determine how many 0s, and from that how many 1s there are at each
              index.
            </li>
            <li>
              For the gammaRate we want 0 or 1 depending on which bit is{" "}
              <b>most</b> prevalent.
            </li>
            <li>
              For the epsilonRate we want 0 or 1 depending on which bit is{" "}
              <b>least</b> prevalent.
            </li>
            <li>
              This code loops once through the initial array to make the map,
              then uses reduce on each array based on the length of the binary
              code. Making this solution in Big O notation:{" "}
              <b>N + (N * C) which should reduce down to 2N</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdventChallengeDay4a;
