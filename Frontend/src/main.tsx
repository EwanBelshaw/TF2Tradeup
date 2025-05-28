import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "react-oidc-context";
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import LandingPage from "./pages/tradeup-landing-page.tsx";
import CreateTradeup from "./pages/tradeup-create-tradeup.tsx";
import CreateBlog from "./pages/tradeup-create-blog.tsx";
import Blog from "./pages/tradeup-blog.tsx";
import LoginPage from "./pages/login-page.tsx";
import ProtectedRoute from "./components/protected-route.tsx";
import CallBackPage from "./pages/callback-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/home",
    Component: LandingPage,
  },
  {
    path: "/callback",
    Component: CallBackPage,
  },
  {
    path: "/create-tradeup",
    element: (
      <ProtectedRoute>
        <CreateTradeup />
      </ProtectedRoute>
    ), // Protects a route and redirects to the login page if not authenticated
  },
  {
    path: "/create-blog",
    element: (
      <ProtectedRoute>
        <CreateBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);

const oidcConfig = {
  authority: "http://localhost:9090/realms/TF2Tradeup",
  client_id: "TF2Tradeup-Frontend",
  redirect_uri: "http://localhost:5173/callback",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
