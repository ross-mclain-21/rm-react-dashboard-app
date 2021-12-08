import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../App.scss";
import UserAvatar from "./UserAvatar";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function TopNavigation() {
  const { isLoading, isAuthenticated } = useAuth0();
  return (
    <div className="d-flex align-items-center justify-content-end top-navigation">
      {process.env.REACT_APP_DEVELOPMENT_ENVIRONMENT != "production" ? (
        <span className="text-code-red">
          {process.env.REACT_APP_DEVELOPMENT_ENVIRONMENT}
        </span>
      ) : (
        <></>
      )}
      <UserAvatar />
      {isLoading ? <></> : isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
