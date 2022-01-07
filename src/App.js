import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/*" />
      </Routes>
    </Router>
  );
};

export default App;
