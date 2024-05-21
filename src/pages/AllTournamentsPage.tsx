import { useState } from "react";
import Tournament from "../components/Tournament";

function AllTournamentsPage() {
  const [tournaments, setTournaments] = useState<ITournamentPre[]>([
    {
      title: "Чемпионат 1 по спортивному программированию",
      date: "Начало 19.03.2024 в 08:00",
    },
    {
      title: "Чемпионат 2 по спортивному программированию",
      date: "Начало 19.03.2024 в 09:00",
    },
    {
      title: "Чемпионат 3 по спортивному программированию",
      date: "Начало 19.03.2024 в 10:00",
    },
    {
      title: "Чемпионат 4 по спортивному программированию",
      date: "Начало 19.03.2024 в 11:00",
    },
  ]);

  return (
    <ul className="tournament-list">
      {tournaments.map((t) => (
        <Tournament key={t.title} title={t.title} date={t.date} />
      ))}
    </ul>
  );
}

export default AllTournamentsPage;
