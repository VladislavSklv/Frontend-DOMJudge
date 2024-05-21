import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import "./types/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllTournamentsPage from "./pages/AllTournamentsPage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout";
import StartPage from "./pages/StartPage";
import SoonTournament from "./pages/SoonTournament";
import TournamentPage from "./pages/TournamentPage";
import ThanksPage from "./pages/ThanksPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AllTournamentsPage />,
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/soon",
        element: <ProtectedRoute />, // Использование ProtectedRoute
        children: [
          {
            index: true,
            element: <SoonTournament />,
          },
        ],
      },
      {
        path: "/start",
        element: <ProtectedRoute />, // Использование ProtectedRoute
        children: [
          {
            index: true,
            element: <StartPage />,
          },
        ],
      },
      {
        path: "/tournament",
        element: <ProtectedRoute />, // Использование ProtectedRoute
        children: [
          {
            index: true,
            element: <TournamentPage />,
          },
        ],
      },
      {
        path: "/thanks",
        element: <ProtectedRoute />, // Использование ProtectedRoute
        children: [
          {
            index: true,
            element: <ThanksPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />, // Маршрут для страницы 404
      },
    ],
  },
]);

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  setIsHidden: (value: boolean) => void;
  isHidden: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  setIsHidden: () => {},
  isHidden: false,
});

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        setIsHidden,
        isHidden,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
