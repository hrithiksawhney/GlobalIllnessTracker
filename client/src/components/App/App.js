import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import Selection from '../Selection/Selection.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Selection />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;