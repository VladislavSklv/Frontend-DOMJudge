import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>
        Что-то пошло не так! <br /> Страница, которую вы запрашиваете, не
        существует
      </h2>
      <button className="button" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </div>
  );
};

export default ErrorPage;
