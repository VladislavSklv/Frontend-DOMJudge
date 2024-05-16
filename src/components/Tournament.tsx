import React from "react";

const Tournament: React.FC<ITournament> = ({ date, title }) => {
  return (
    <li className="tournament">
      <h2 className="tournament__title">{title}</h2>
      <p className="tournament__date">{date}</p>
    </li>
  );
};

export default Tournament;
