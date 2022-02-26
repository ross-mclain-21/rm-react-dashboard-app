import React from "react";

interface IBingoBoard {
  bingo: number[][];
}

function AdventChallengeBingoBoard({ bingo }: IBingoBoard) {
  return (
    <div className="col-md-4 mb-3">
      <div className="d-flex flex-column p-3 bingo-board">
        {bingo.map((y, index) => (
          <div className="d-flex align-items-center">
            {y.map((x) => (
              <span className="flex-fill">{x}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdventChallengeBingoBoard;
