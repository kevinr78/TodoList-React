import "./master.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TaskProvider } from "./TaskProvider";

function TodoContainer() {
  return (
    <Router>
      <div>
        <Header />
        <TaskProvider>
          <div className="todo_container">
            <Switch>
              <Route path="/add" component={AddTodo} />
              <Route path="/tasks" component={Todo} />
            </Switch>
          </div>
        </TaskProvider>
      </div>
    </Router>
  );
}

export default TodoContainer;
