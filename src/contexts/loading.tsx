import { Box, CircularProgress } from "@chakra-ui/react";
import type { SetStateAction, Dispatch } from "react";
import { useState, createContext } from "react";
import { FCC } from "types/react";

export interface LoadContextValue {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadContext = createContext<LoadContextValue | null>(null);

if (process.env.NODE_ENV === "development") {
  LoadContext.displayName = "LoadContext";
}

const LoadProvider: FCC = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);

  return (
    <LoadContext.Provider value={{ loading, setLoading }}>
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width={"100vw"}
        height={"100vh"}
        bg={"whiteAlpha.600"}
        display={loading ? "flex" : "none"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress isIndeterminate color="red.300" />
      </Box>
      {children}
    </LoadContext.Provider>
  );
};

export { LoadContext as default, LoadProvider };
