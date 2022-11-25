import useAuth from "hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";
import type { FCC } from "types/react";

const PublicRoute: FCC = (props) => {
  const { children } = props;

  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={"/home"} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default PublicRoute;
