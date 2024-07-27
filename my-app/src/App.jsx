import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Recommendations from "./components/Recommendations";
import ReturnToWork from "./components/ReturnToWork";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
