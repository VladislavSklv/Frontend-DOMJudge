import React, { useEffect, useState } from "react";
import TaskNavBar from "../components/TaskNavBar";
import { useNavigate } from "react-router-dom";

interface ITask {
  title: string;
  task: string;
  id: number;
  userAnswer: undefined | string;
  isCorrect: undefined | boolean;
}

export interface ITournament {
  task: ITask[];
  time: number;
}

const TournamentPage: React.FC = () => {
  const [taskList, setTaskList] = useState<ITournament>({
    time: 30000,
    task: [
      {
        title: "Test Task 1",
        task: "Test Task",
        userAnswer: undefined,
        id: 0,
        isCorrect: undefined,
      },
      {
        title: "Test Task 2",
        task: "Test Task",
        userAnswer: undefined,
        id: 1,
        isCorrect: undefined,
      },
      {
        title: "Test Task 3",
        task: "Test Task",
        userAnswer: undefined,
        id: 2,
        isCorrect: undefined,
      },
      {
        title: "Test Task 4",
        task: "Test Task",
        userAnswer: undefined,
        id: 3,
        isCorrect: undefined,
      },
    ],
  });

  const [currentTaskId, setCurrentTaskId] = useState<number>(0);
  const [textareaValue, setTextareaValue] = useState<string>("");

  useEffect(() => {
    let answ = taskList.task[currentTaskId].userAnswer;
    if (answ !== undefined) {
      setTextareaValue(answ);
    } else {
      setTextareaValue("");
    }
  }, [currentTaskId]);

  const navigate = useNavigate();

  useEffect(() => {
    let allCorrect = true;
    taskList.task.forEach((item) => {
      if (item.isCorrect === undefined) allCorrect = false;
      if (item.isCorrect === false) allCorrect = false;
    });

    if (allCorrect) navigate("/thanks");
  }, [taskList]);

  const sendAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let isCorrect = false;
    if (textareaValue == "admin") isCorrect = true;
    setTaskList((prev) => ({
      ...prev,
      task: prev.task.map((item, index) =>
        index === currentTaskId
          ? { ...item, userAnswer: textareaValue, isCorrect }
          : item
      ),
    }));
  };

  return (
    <div>
      <TaskNavBar
        taskList={taskList}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
      />

      <div className="task">
        <div className="task__info">
          <p className="task__title">{taskList.task[currentTaskId].title}</p>
          <a href="#" className="task__text">
            Условие задачи
          </a>
          {taskList.task[currentTaskId].isCorrect !== undefined &&
            !taskList.task[currentTaskId].isCorrect && (
              <div className="task__message task__message_error">
                Неверно, попробуйте ещё раз
              </div>
            )}
          {taskList.task[currentTaskId].isCorrect !== undefined &&
            taskList.task[currentTaskId].isCorrect && (
              <div className="task__message task__message_correct">
                Задание выполнено
              </div>
            )}
        </div>
        <form>
          <textarea
            name="answer"
            id="user-answer"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          <div className="select-wrapper">
            <select name="language" defaultValue="C++">
              <option value="JS">JavaScript</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
            </select>
            <button className="button" onClick={(e) => sendAnswer(e)}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TournamentPage;
