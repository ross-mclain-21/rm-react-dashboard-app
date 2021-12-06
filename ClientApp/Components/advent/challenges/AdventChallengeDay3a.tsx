import React, { useContext } from "react";
import "../Advent.scss";
import AdventContext from "../AdventContext";
import {
  adventDay2Data,
  adventDay3Data,
  IAdventDay2Data,
} from "../data/AdventDataSource";

function AdventChallengeDay3a() {
  const solvePuzzle = (inputData: string[]) => {
    const indicesMap = new Map<number, number[]>();
    let gammaRate = "";
    let epsilonRate = "";
    inputData.map((value) => {
      Array.from(value).map((bit, index) => {
        if (indicesMap.has(index) == false) indicesMap.set(index, []);
        indicesMap?.get(index)?.push(parseInt(bit));
      });
    });
    indicesMap.forEach((value) => {
      const zeroCount = value.reduce(
        (acc, v, i) => (acc += v === 0 ? 1 : 0),
        0
      );
      const oneCount = value.length - zeroCount;
      gammaRate += zeroCount > oneCount ? "0" : "1";
      epsilonRate += zeroCount < oneCount ? "0" : "1";
    });

    const result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

    return [gammaRate, epsilonRate, result];
  };
  const [gammaRate, epsilonRate, result] = solvePuzzle(adventDay3Data);
  return (
    <div className="flex-fill">
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Input:</h5>
        <div className="px-3 small">
          <p className="small data-box">{adventDay3Data.join(", ")}</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Solution:</h5>
        <div className="px-3">
          <p className="color-code-green">
            Given our input, the resulting gamma rate is: {gammaRate} while the
            resulting epsilon rate is: {epsilonRate} leaving us with a result
            of: {result}
          </p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">{` const solvePuzzle = (inputData: string[]) => {
    const indicesMap = new Map<number, number[]>();
    let gammaRate = "";
    let epsilonRate = "";
    inputData.map((value) => {
      Array.from(value).map((bit, index) => {
        if (indicesMap.has(index) == false) indicesMap.set(index, []);
        indicesMap?.get(index)?.push(parseInt(bit));
      });
    });
    indicesMap.forEach((value) => {
      const zeroCount = value.reduce(
        (acc, v, i) => (acc += v === 0 ? 1 : 0),
        0
      );
      const oneCount = value.length - zeroCount;
      gammaRate += zeroCount > oneCount ? "0" : "1";
      epsilonRate += zeroCount < oneCount ? "0" : "1";
    });

    const result = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

    return [gammaRate, epsilonRate, result];
  };`}</pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small code mb-0">
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

export default AdventChallengeDay3a;
