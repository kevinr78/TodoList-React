import "./master.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import * as VS from "react-icons/vsc";
import * as FA from "react-icons/fa";

function Header() {
  const [isHidden, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!isHidden);
  };

  return (
    <header>
      <div className="text">
        <FA.FaBars onClick={toggleSidebar} />
        <span> TASKS</span>
      </div>

      <nav className={isHidden ? "nav_menu active" : "nav_menu"} id="nav_menu">
        <div className="close_icon">
          <VS.VscChromeClose onClick={toggleSidebar} />
        </div>
        <div className="nav_text">
          <Link to="tasks" onClick={toggleSidebar}>
            <FA.FaPlus /> <span>All Notes</span>
          </Link>
          <Link to="add" onClick={toggleSidebar}>
            <FA.FaPlus /> <span>Add</span>
          </Link>
          <Link to="add" onClick={toggleSidebar}>
            <FA.FaMinusCircle /> <span>Delete</span>
          </Link>
          <Link to="add" onClick={toggleSidebar}>
            <FA.FaCheck /> <span>Completed</span>
          </Link>
          <Link to="add" onClick={toggleSidebar}>
            <FA.FaFilter /> <span>Sort</span>
          </Link>
        </div>
      </nav>
      <div className="search_container">
        <div className="search_logo">
          <FA.FaSearch />
        </div>
        <div className="search_input">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
