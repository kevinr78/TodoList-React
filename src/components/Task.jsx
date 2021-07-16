import React, { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { TaskContext } from "./TaskProvider";

function Task({ title, priority, date, content, uid }) {
  const [isActive, setIsActive] = useState(false);
  const [tasks, setTasks] = useContext(TaskContext);
  const [completedTask, setCompletedTask] = useState([]);
  let badgeColor = "";

  if (priority === "Critical") {
    badgeColor = "#D00000";
  } else if (priority === "Important") {
    badgeColor = "#e76f51";
  } else {
    badgeColor = "#7ddf64";
  }

  const removeTaskfromList = (e) => {
    let task_id = e.target.closest("li").getAttribute("id");
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.uid !== task_id;
      });
    });
  };

  const addToCompletedList = (e) => {
    let task_id = e.target.closest("li").getAttribute("id");
    let task = tasks.filter((task) => {
      return task.uid === task_id;
    });
    setCompletedTask((prevValues) => {
      return [...prevValues, task];
    });
    console.log(completedTask);
    removeTaskfromList(e);
  };
  return (
    <li id={uid} className="accordion-item flex">
      <div className="accordion-title">
        <span> {title} </span>
        <div className="details flex">
          <div className="extra_item">
            <span style={{ backgroundColor: badgeColor }} className="priority">
              {priority}{" "}
            </span>
            <span className="small_text"> Priority</span>
          </div>
          <div className="extra_item">
            <span className="time ">{date}</span>
            <span className="small_text"> Due Date</span>
          </div>

          <span
            className=""
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <FaChevronDown />{" "}
          </span>
          <input
            type="checkbox"
            name="complete_check"
            id="complete_check"
            onClick={addToCompletedList}
          />
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
}

export default Task;
