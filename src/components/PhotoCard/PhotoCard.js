import React from "react";
import { Link } from "react-router-dom";
import "./PhotoCard.css";

export function PhotoCard({ image, title, desc }) {
  return (
    <Link to='/lily' style={{ textDecoration: 'none', color: 'black' }}>
      <div className="PhotoCard">
        <div className="LeftContainer">
          <img src={image} alt="dogs" />
        </div>
        <div className="RightContainer">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
