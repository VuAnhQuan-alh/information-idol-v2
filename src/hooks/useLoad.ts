import type { LoadContextValue } from "contexts/loading";
import LoadingContext from "contexts/loading";
import { useContext } from "react";

const useLoad = (): LoadContextValue => {
  const loadContext = useContext(LoadingContext);

  if (!loadContext) {
    throw new Error("Forgot to warp component in LoadContext");
  }

  return loadContext;
};

export default useLoad;
