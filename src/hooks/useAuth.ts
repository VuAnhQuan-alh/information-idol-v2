import type { AuthContextValue } from "contexts/auth";
import AuthContext from "contexts/auth";
import { useContext } from "react";

const useAuth = (): AuthContextValue => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("Forgot to warp component in AuthContext");
  }

  return authContext;
};

export default useAuth;
