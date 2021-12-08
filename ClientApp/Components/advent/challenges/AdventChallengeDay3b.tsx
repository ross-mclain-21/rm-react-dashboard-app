import React from "react";
import "../Advent.scss";
import { adventDay3Data } from "../data/AdventDataSource";

function AdventChallengeDay3b() {
  const determineCommonBit = (
    inputData: string[],
    mostCommon: boolean,
    resultBinary: string = ""
  ): string => {
    console.log(inputData, mostCommon, resultBinary);

    if (inputData.length == 1) {
      resultBinary += inputData[0];
      return resultBinary;
    }

    const zeroMap: string[] = [];
    const oneMap: string[] = [];
    inputData.map((value, index) => {
      value.startsWith("0") ? zeroMap.push(value) : oneMap.push(value);
    });

    if (
      (mostCommon === true && oneMap.length >= zeroMap.length) ||
      (mostCommon === false && oneMap.length < zeroMap.length)
    ) {
      resultBinary += "1";
      return determineCommonBit(
        oneMap.map((value) => value.substring(1)),
        mostCommon,
        resultBinary
      );
    }

    resultBinary += "0";
    return determineCommonBit(
      zeroMap.map((value) => value.substring(1)),
      mostCommon,
      resultBinary
    );
  };

  const solvePuzzle = (inputData: string[]) => {
    const oxygenGeneratorRating = determineCommonBit(inputData, true);
    const co2ScrubberRating = determineCommonBit(inputData, false);
    const result =
      parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
    return [
      parseInt(oxygenGeneratorRating, 2),
      parseInt(co2ScrubberRating, 2),
      result,
    ];
  };
  const [oxygenGeneratorRating, co2ScrubberRating, result] =
    solvePuzzle(adventDay3Data);
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
            {" "}
            The Oxygen Generator Rating is: {oxygenGeneratorRating}, while the
            C02 Scrubber Rating is: {co2ScrubberRating}, giving us the result of{" "}
            {result}.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <h5 className="mb-2">Code:</h5>
        <div className="px-3">
          <pre className="color-code-green small code mb-0">{`const solvePuzzle = (inputData: string[]) => {
    const oxygenGeneratorRating = determineCommonBit(inputData, true);
    const co2ScrubberRating = determineCommonBit(inputData, false);
    const result =
      parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
    return [
      parseInt(oxygenGeneratorRating, 2),
      parseInt(co2ScrubberRating, 2),
      result,
    ];
  };
          
 const determineCommonBit = (
    inputData: string[],
    mostCommon: boolean,
    resultBinary: string = ""
  ): string => {
    console.log(inputData, mostCommon, resultBinary);

    if (inputData.length == 1) {
      resultBinary += inputData[0];
      return resultBinary;
    }

    const zeroMap: string[] = [];
    const oneMap: string[] = [];
    inputData.map((value, index) => {
      value.startsWith("0") ? zeroMap.push(value) : oneMap.push(value);
    });

    if (
      (mostCommon === true && oneMap.length >= zeroMap.length) ||
      (mostCommon === false && oneMap.length < zeroMap.length)
    ) {
      resultBinary += "1";
      return determineCommonBit(
        oneMap.map((value) => value.substring(1)),
        mostCommon,
        resultBinary
      );
    }

    resultBinary += "0";
    return determineCommonBit(
      zeroMap.map((value) => value.substring(1)),
      mostCommon,
      resultBinary
    );
  };`}</pre>
        </div>
      </div>
      <div className="d-flex flex-column">
        <h5 className="mb-2">Code Explanation:</h5>
        <div className="px-3">
          <ul className="color-code-green small code mb-0">
            <li>Take in binary code input array as :{`<string>[]`}.</li>
            <li>
              Use my recursive function to get the Oxygen Generator Rating and
              the CO2 Scrubber Rating.
            </li>
            <li>
              Loop over each binary number, separating the array into a 0 array
              and 1 array based on the leading number.
            </li>
            <li>
              Build the result binary bit by bit as I remove the leading bit of
              each binary and then pass an array of the most common values into
              my recursive function to continually cut out the least/most common
              bits until we get to 1 binary number.
            </li>
            <li>
              Parse the binary values for Oxygen Generator Rating and CO2
              Scrubber Rating into numbers then multiply them to get the answer
            </li>
            <li>
              This code loops over the array initially twice, one for oxygen and
              again for co2. It then breaks the array into roughly half based on
              which bit is most/least common. Then it does it again, looking at
              the half it broke off. That leads me to believe that this function
              is <b>2Nlog(N) according to Big O notation.</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdventChallengeDay3b;
