import { createContext, useEffect, useState } from "react";
import type { DispatchWithoutAction } from "react";
import type { FCC } from "types/react";
import type { User } from "types/user";
import {
  LoginParams,
  logProfile,
  RegisParams,
  signIn,
  signOut,
  signUp,
} from "services/auth";
import LocalStorage from "utils/LocalStorage";
import useRefresh from "hooks/useRefresh";
import wait from "utils/wait";

type login = typeof signIn;
type logout = typeof signOut;
type regis = typeof signUp;

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const fakeUser: User = {
  id: 1,
  username: "admin",
  email: "admin@gmail.com",
  provider: "string",
  confirmed: true,
  blocked: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export interface AuthContextValue extends State {
  login: login;
  logout: logout;
  regis: regis;
  refetch: DispatchWithoutAction;
}

const AuthContext = createContext<AuthContextValue | null>(null);

if (process.env.NODE_ENV === "development") {
  AuthContext.displayName = "AuthContext";
}

const AuthProvider: FCC = (props) => {
  const { children } = props;
  const [state, setState] = useState<State>(initialState);
  const [refresh, refetch] = useRefresh();

  const onHandleWait = async () => {
    try {
      await wait(1000);
    } catch (error) {}
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      onHandleWait().finally(() => {
        const isJwt = LocalStorage.get("jwt");

        if (isJwt === "string-jwt") {
          setState({
            isAuthenticated: true,
            isInitialized: true,
            user: fakeUser,
          });
        } else {
          setState({
            isAuthenticated: false,
            isInitialized: true,
            user: null,
          });
        }
      });
    } else {
      logProfile()
        .then((data) => {
          setState({
            isAuthenticated: true,
            isInitialized: true,
            user: data,
          });
        })
        .catch(() => {
          setState({
            isAuthenticated: false,
            isInitialized: true,
            user: null,
          });
        });
    }
  }, [refresh]);

  const login = async (params: LoginParams) => {
    if (process.env.NODE_ENV === "development") {
      onHandleWait().finally(() => {
        setState({
          isAuthenticated: true,
          isInitialized: true,
          user: fakeUser,
        });
      });

      LocalStorage.set("jwt", "string-jwt");

      return {
        jwt: "string",
        user: fakeUser,
      };
    }

    const response = await signIn(params);
    const { jwt, user } = response;

    if (jwt && user) {
      setState({
        isAuthenticated: true,
        isInitialized: true,
        user: user,
      });

      LocalStorage.set("jwt", jwt);
    } else {
      setState({
        isAuthenticated: false,
        isInitialized: true,
        user: null,
      });
    }

    return response;
  };

  const regis = async (params: RegisParams) => {
    if (process.env.NODE_ENV === "development") {
      onHandleWait().finally(() => {
        setState({
          isAuthenticated: true,
          isInitialized: true,
          user: fakeUser,
        });
      });

      LocalStorage.set("jwt", "string-jwt");

      return {
        jwt: "string",
        user: fakeUser,
      };
    }

    const response = await signUp(params);
    const { jwt, user } = response;

    if (jwt && user) {
      setState({
        isAuthenticated: true,
        isInitialized: true,
        user: user,
      });

      LocalStorage.set("jwt", jwt);
    } else {
      setState({
        isAuthenticated: false,
        isInitialized: true,
        user: null,
      });
    }

    return response;
  };

  const logout = async () => {
    // const response = await signOut();
    await wait(1000).then(() => {
      setState({
        isAuthenticated: false,
        isInitialized: true,
        user: null,
      });
      console.log("log out");
    });
    LocalStorage.remove("jwt");
    return null;
  };

  return (
    <AuthContext.Provider value={{ ...state, regis, login, logout, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;
export { AuthContext as default, AuthConsumer, AuthProvider };
