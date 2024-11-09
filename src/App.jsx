import "./App.css";
import React from "react";
import Landingpage from "./Components/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
