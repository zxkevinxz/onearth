import React from "react";
import { NavLink } from "react-router-dom";
import earth from "../assets/planet-earth.png";

export function Header() {
  return (
    <div className="header">
      <nav className="header-menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/lily">Lily</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-logo">
        <img src={earth} alt="earth logo" />
        {/* <a href="https://www.flaticon.com/free-icons/earth" title="earth icons">
          Earth icons created by Freepik - Flaticon
        </a> */}
      </div>
    </div>
  );
}
