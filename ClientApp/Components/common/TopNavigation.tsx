import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../App.scss";
import UserAvatar from "./UserAvatar";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function TopNavigation() {
  const { isLoading, isAuthenticated } = useAuth0();
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
          <div className="d-flex align-items-center justify-content-end flex-fill">
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
