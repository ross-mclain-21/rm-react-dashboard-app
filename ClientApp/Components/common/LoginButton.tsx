import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../App.scss";

export default function LoginButton() {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      className="btn btn-sm btn-outline-code-green"
      onClick={() => loginWithPopup()}
    >
      Log In
    </button>
  );
}
