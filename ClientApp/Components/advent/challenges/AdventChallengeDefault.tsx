import React from "react";
import "../Advent.scss";

function AdventChallengeDefault() {
  return (
    <div className="flex-fill">
      <div className="d-flex flex-column">
        <h5 className="mb-2">Problem Solution:</h5>
        <div className="px-3">
          <p className="color-code-green">I have not solved this yet!</p>
        </div>
      </div>
    </div>
  );
}

export default AdventChallengeDefault;
