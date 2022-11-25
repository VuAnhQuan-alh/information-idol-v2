import { ChakraProvider } from "@chakra-ui/react";
import { LoadProvider } from "contexts/loading";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import { AuthConsumer, AuthProvider } from "./contexts/auth";
import theme from "theme-config";
import routes from "./routers";
import Fonts from "font-config";

export const App = () => (
  <HelmetProvider>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Fonts>
          <LoadProvider>
            <AuthConsumer>
              {(auth) =>
                !auth || !auth.isInitialized ? (
                  <SplashScreen />
                ) : (
                  <RouterProvider router={routes} />
                )
              }
            </AuthConsumer>
          </LoadProvider>
        </Fonts>
      </ChakraProvider>
    </AuthProvider>
  </HelmetProvider>
);
