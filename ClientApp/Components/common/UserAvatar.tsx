import React, { useEffect } from "react";
import "../../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserAvatar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const avatarLoading = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      avatarLoading.start({
        maxWidth: "100%",
      });
    }
  }, [isLoading]);

  return (
    <div className="d-flex align-items-center mx-3">
      {isLoading ? (
        <Spinner animation={"border"} />
      ) : isAuthenticated ? (
        <div className={"d-flex align-items-center"}>
          <div className="d-flex align-items-center flex-nowrap">
            <img
              className="img user-avatar-img me-3"
              width={30}
              height={30}
              src={user?.picture}
              alt={user?.name}
            />
            <motion.p
              className="user-avatar-name small text-nowrap mb-0"
              initial={{ maxWidth: "0" }}
              animate={avatarLoading}
              transition={{ duration: 1 }}
            >
              {user?.name}
            </motion.p>
          </div>
          <Link to="/settings">
            <FontAwesomeIcon
              icon={faCog}
              className={"ms-3 cog-settings-wheel"}
            />
          </Link>
        </div>
      ) : (
        <FontAwesomeIcon icon={faUserCircle} className="fa-2x" />
      )}
    </div>
  );
}
