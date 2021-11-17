import React from "react";
import HomeHeader from "./HomeHeader";
import HomeDetail from "./HomeDetail";

function HomeContainer() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <HomeHeader />
      <HomeDetail />
    </div>
  );
}

export default HomeContainer;
