import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
