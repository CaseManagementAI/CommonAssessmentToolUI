import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Recommendations from "./components/Recommendations";
import ReturnToWork from "./components/ReturnToWork";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Form />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
