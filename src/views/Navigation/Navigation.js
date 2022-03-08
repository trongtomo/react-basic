import React from "react";
import "./Navigation.scss";
import { Outlet, Link, NavLink } from "react-router-dom";
class Navigaton extends React.Component {
  render() {
    return (
      <div className="topnav">
        {/* su dung link thay vi a href boi vi co e.prevent default ko load lai */}

        {/* <Link to="/">Home</Link>
        <Link to="/todo">To do</Link>
        <Link to="/mycomponent">My Component</Link> */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          To do
        </NavLink>
        <NavLink
          to="/mycomponent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Component
        </NavLink>
        <Outlet />
      </div>
    );
  }
}
export default Navigaton;
