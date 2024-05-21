import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../main";

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const checkLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (email === "admin" && password === "admin" && auth !== null) {
      navigate("/soon");
      auth.setIsAuth(true);
      auth.setIsHidden(false);
    } else {
      alert("Неправильный логин или пароль");
    }
  };

  useEffect(() => {
    if (auth !== null) auth.setIsHidden(true);
  }, []);

  return (
    <div className="auth">
      <form>
        <input
          value={email}
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => checkLogin(e)} className="button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
