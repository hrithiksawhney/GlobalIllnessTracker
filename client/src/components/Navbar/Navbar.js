import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <a className="Title" href="/">Global Illness Tracker</a>
      <div className="Links">
        <a href="/about">‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎About‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎</a>
        <a href="https://github.com/sqwyer/GlobalIllnessTracker">‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎Contribute</a>
      </div>
    </div>
  )
}

export default Navbar;
