import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SoonTournament: React.FC = () => {
  const navigate = useNavigate();
  const date = "19.03.2024";
  const time = "8:00";
  const moveToStartPage = () => {
    setTimeout(() => navigate("/start"), 10000);
  };
  useEffect(() => {
    moveToStartPage();
    return moveToStartPage();
  }, []);
  return (
    <div className="soon">
      <p className="soon__title">
        Соревнование запланировано на {date}{" "}
        <span className="soon__date">{time}</span>
      </p>
    </div>
  );
};

export default SoonTournament;
