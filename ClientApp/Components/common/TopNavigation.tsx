import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../App.scss";
import UserAvatar from "./UserAvatar";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { Container, Navbar } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function TopNavigation() {
  const { isLoading, isAuthenticated } = useAuth0();
  const location = useLocation();
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="bg-transparent py-3"
    >
      <Container>
        <Navbar.Toggle aria-controls="top-navigation" />
        <Navbar.Collapse id="top-navigation">
          <div className="d-flex align-items-center justify-content-between flex-fill">
            <div className={"me-auto"}>
              {location.pathname !== "/" ? (
                <Link className="btn btn-outline-code-green btn-sm" to="/">
                  Return Home!
                </Link>
              ) : (
                <></>
              )}
            </div>
            <UserAvatar />
            {isLoading ? (
              <></>
            ) : isAuthenticated ? (
              <LogoutButton />
            ) : (
              <LoginButton />
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
