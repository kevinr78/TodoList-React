import "./master.css";
import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskProvider";

function AddTodo() {
  const [tasks, setTasks] = useContext(TaskContext);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
    uid: "",
  });
  const [modal, setModal] = useState(false);

  const updateTaskData = (e) => {
    const {
      timeStamp,
      target: { name, value },
    } = e;

    setNewTask({
      ...newTask,
      [name]: value,
      uid: timeStamp.toString().substring(0, 4),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({
      title: "",
      description: "",
      date: "",
      priority: "",
      uid: "",
    });
    setTasks((prevValues) => {
      return [...prevValues, newTask];
    });
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };
  return (
    <section className="add_task_container">
      <div className={modal ? "active modal" : "modal hide"} id="modal">
        <p>Your Task Has been successfully added</p>
      </div>
      <header>
        <span>Add a new task</span>
      </header>
      <div className="task_details">
        <form>
          <div className="title_container">
            <p>
              <label htmlFor="t_input">Title</label>
            </p>
            <input
              type="text"
              name="title"
              id="t_input"
              value={newTask.title}
              className="t_input"
              onChange={updateTaskData}
            />
          </div>
          <div className="desc_container">
            <p>
              <label htmlFor="d_input">Description</label>
            </p>
            <input
              type="text"
              id="d_input"
              value={newTask.description}
              name="description"
              className="d_input"
              onChange={updateTaskData}
            />
          </div>

          <div className="extras">
            <div className="date_input">
              <p>
                <label htmlFor="date">Due Date</label>
              </p>
              <input
                type="date"
                id="date"
                value={newTask.date}
                name="date"
                onChange={updateTaskData}
              />
            </div>
            <div className="select_input">
              <p>
                <label htmlFor="priority">Priority</label>
              </p>
              <select
                name="priority"
                id="priority"
                value={newTask.priority}
                onChange={updateTaskData}
              >
                <option value=""></option>
                <option value="Critical">Critical</option>
                <option value="Important">Important</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
          </div>
          <div className="buttons_area">
            <button type="button">Clear</button>
            <button type="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddTodo;
