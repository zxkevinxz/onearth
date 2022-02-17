import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Home } from './components/Home';
import { Games } from './components/Games';
import { Doggo } from './components/Doggo';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="view-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lily" element={<Doggo />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
