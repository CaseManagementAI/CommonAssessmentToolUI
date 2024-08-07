import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Form_new from "./components/Form_new";
import Recommendations from "./components/Recommendations";
import ReturnToWork from "./components/ReturnToWork";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<Form_new />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
