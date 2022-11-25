import { lazy } from "react";
import Loadable from "components/Loadable";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import PublicRoute from "./publicRoute";
import ProtectedRoute from "./protectedRoute";

const LoginPage = Loadable(lazy(() => import("views/Auth/LoginPage")));
const RegisPage = Loadable(lazy(() => import("views/Auth/RegisterPage")));
const Portfolio = Loadable(lazy(() => import("views/Auth/Portfolio")));

const HomePage = Loadable(lazy(() => import("views/HomePage")));
const TodoPage = Loadable(lazy(() => import("views/TodoPage")));
const AnalyticsPage = Loadable(lazy(() => import("views/Analytics")));
const NotFound = Loadable(lazy(() => import("views/Errors/NotFound")));

// layout component
const PublicLayout = Loadable(
  lazy(() => import("components/layouts/PublicLayout"))
);
const ProtectedLayout = Loadable(
  lazy(() => import("components/layouts/ProtectedLayout"))
);
const ErrorsLayout = Loadable(
  lazy(() => import("components/layouts/ErrorsLayout"))
);

const routes: RouteObject[] = [
  {
    path: "auth",
    element: (
      <PublicRoute>
        <PublicLayout />
      </PublicRoute>
    ),
    children: [
      { index: true, element: <Portfolio /> },
      { path: "login", element: <LoginPage /> },
      { path: "regis", element: <RegisPage /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ProtectedLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "todo", element: <TodoPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
    ],
  },
  {
    path: "*",
    element: (
      <ErrorsLayout>
        <NotFound />
      </ErrorsLayout>
    ),
  },
];

export default createBrowserRouter(routes);
