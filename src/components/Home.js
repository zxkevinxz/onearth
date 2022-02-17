import React from "react";
import { Welcome } from "./home/Welcome";
import { Quote } from "./home/Quote";
import { Photos } from "./home/Photos";
import './home/home.css';

export function Home() {
  return (
    <div className="tabpage">
      <div className="home-panel">
        <Welcome />
        <Quote />
      </div>
      <div className="home-panel">
        <Photos />
      </div>
    </div>
  );
}
