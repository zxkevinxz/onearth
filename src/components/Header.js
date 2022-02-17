import React from "react";
import { NavLink } from "react-router-dom";
import earth from "../assets/planet-earth.png";

export function Header() {
  return (
    <div className="header">
      <nav className="header-menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/lily" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>LILY</NavLink>
          </li>
          <li>
            <NavLink to="/games" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>GAMES</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>CONTACT</NavLink>
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
