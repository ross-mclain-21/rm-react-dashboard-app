import React, { useRef } from "react";

function StarCanvas() {
  const canvasRef = useRef(null);

  return (
    <div>
      {/*<canvas*/}
      {/*  ref={canvasRef}*/}
      {/*  width={window.innerWidth}*/}
      {/*  height={window.innerHeight}*/}
      {/*  className={"p-0 m-0 position-absolute"}*/}
      {/*/>*/}
      <div className="stars" />;
    </div>
  );
}

export default StarCanvas;
