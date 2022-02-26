import React, { useEffect } from "react";
import "./Settings.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";

function Settings() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const avatarLoading = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      avatarLoading.start({
        maxWidth: "100%",
      });
    }
  }, [isLoading]);

  return (
    <div className={"container mt-5 d-flex flex-column"}>
      {isLoading ? (
        <div className={"d-flex align-items-center justify-content-center"}>
          <Spinner animation={"grow"} />
        </div>
      ) : isAuthenticated ? (
        <div className={"d-flex flex-column align-items-center mt-5"}>
          <img
            className="img user-avatar-img mb-3"
            width={150}
            height={150}
            src={user?.picture}
            alt={user?.name}
          />
          <motion.p
            className="user-avatar-name small text-nowrap mb-3 fw-bold"
            initial={{ maxWidth: "0" }}
            animate={avatarLoading}
            transition={{ duration: 1 }}
          >
            {user?.name}
          </motion.p>
          <motion.p
            className="user-avatar-name small text-nowrap mb-3 fw-bold"
            initial={{ maxWidth: "0" }}
            animate={avatarLoading}
            transition={{ duration: 1 }}
          >
            {user?.email}
          </motion.p>
        </div>
      ) : (
        <div
          className={"d-flex align-items-center justify-content-center mt-5"}
        >
          <h3>You must log in to adjust settings!</h3>
        </div>
      )}
    </div>
  );
}

export default Settings;
