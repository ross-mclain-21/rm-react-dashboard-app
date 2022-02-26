import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../App.scss";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-sm btn-outline-code-green"
      onClick={() => logout()}
    >
      Log Out
    </button>
  );
}
