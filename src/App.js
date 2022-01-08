import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
const App = () => {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
