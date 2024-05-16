import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";

const Header: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      {auth != null && !auth.isAuth && !auth.isHidden && (
        <button className="button" onClick={() => navigate("/login")}>
          Вход
        </button>
      )}
      <a href="#" className="logo">
        СПб ГУТ <span>)</span>
        <span>)</span>
        <span>)</span>
      </a>
    </header>
  );
};

export default Header;
