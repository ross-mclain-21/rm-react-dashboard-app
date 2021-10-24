import React from "react";
import HomeHeader from "./HomeHeader";
import HomeDetail from "./HomeDetail";

function HomeContainer() {
  return (
    <div className="home-container d-flex flex-column align-items-center justify-content-center h-100">
      <HomeHeader />
      <HomeDetail />
    </div>
  );
}

export default HomeContainer;
