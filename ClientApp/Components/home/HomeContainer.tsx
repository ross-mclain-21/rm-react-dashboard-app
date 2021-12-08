import React from "react";
import HomeHeader from "./HomeHeader";
import HomeDetail from "./HomeDetail";
import LoginButton from "../common/LoginButton";

function HomeContainer() {
  return (
    <div className=" d-flex flex-column container justify-content-center">
      <HomeHeader />
      <HomeDetail />
    </div>
  );
}

export default HomeContainer;
