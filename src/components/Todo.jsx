import { useContext, useState } from "react";
import { TaskContext } from "./TaskProvider";
import "./todo.css";
import Task from "./Task";

function Todo() {
  const [tasks, setTasks] = useContext(TaskContext);

  return (
    <div className="tasks_container flex">
      <div className="accordion flex">
        {tasks.length === 0 ? (
          <p className="no_task_text"> No Notes To Show &#10060;</p>
        ) : (
          tasks.map((task) => {
            return (
              <Task
                title={task.title}
                content={task.description}
                date={task.date}
                priority={task.priority}
                key={task.uid}
                uid={task.uid}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Todo;
