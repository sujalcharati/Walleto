import "./App.css";
import React from "react";
import Landingpage from "./Components/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Home } from "./Components/Home";
import Transaction from "./Components/Transaction";
import { TransactionsProvider } from "./Components/TransactionsProvider";

function App() {
  return (
    <TransactionsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
      </Routes>
    </BrowserRouter>
    </TransactionsProvider>

  );
}

export default App;
