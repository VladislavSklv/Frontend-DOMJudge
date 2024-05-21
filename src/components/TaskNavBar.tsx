import React from "react";
import { ITournament } from "../pages/TournamentPage";

interface TaskNavBarProps {
  currentTaskId: number;
  taskList: ITournament;
  setCurrentTaskId: React.Dispatch<React.SetStateAction<number>>;
}

const TaskNavBar: React.FC<TaskNavBarProps> = ({
  taskList,
  currentTaskId,
  setCurrentTaskId,
}) => {
  return (
    <ul className="navbar">
      <span>Задача</span>
      {taskList.task.map((item, i) => (
        <li
          key={item.id}
          className={
            currentTaskId == item.id
              ? "navbar__item navbar__item_active"
              : item.isCorrect !== undefined
              ? item.isCorrect
                ? "navbar__item navbar__item_correct"
                : "navbar__item navbar__item_error"
              : "navbar__item"
          }
          onClick={() => setCurrentTaskId(i)}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default TaskNavBar;
