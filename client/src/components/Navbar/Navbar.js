import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div class="Navbar">
      <a class="Title" href="/">Global Illness Tracker</a>
      <div class="Links">
        <a href="/about">‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎About‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎</a>
        <a href="https://github.com/sqwyer/GlobalIllnessTracker">‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎Contribute</a>
      </div>
    </div>
  )
}

export default Navbar;
