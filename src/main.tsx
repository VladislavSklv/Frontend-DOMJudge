import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import "./types/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllTournamentsPage from "./pages/AllTournamentsPage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout";
import StartPage from "./pages/StartPage";

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
        path: "/start",
        element: <StartPage />,
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

export const AuthContext = createContext<AuthContextType | null>(null);

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
