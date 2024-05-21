import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="start">
      <button className="button" onClick={() => navigate("/tournament")}>
        Начать соревнование
      </button>
    </div>
  );
};

export default StartPage;
