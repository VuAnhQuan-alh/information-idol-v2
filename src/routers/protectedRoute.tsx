import React from "react";
import { FCC } from "types/react";
import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute: FCC = (props) => {
  const { children } = props;

  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={"/auth"} replace />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
