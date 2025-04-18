import "./App.css";
import React from "react";
import Landingpage from "./Components/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Home } from "./Components/Home";
import Transaction from "./Components/Transaction";
import { TransactionsProvider } from "./Components/TransactionsProvider";
import Stats from "./components/Stats"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import { Header } from "./Components/Header";



function App() {
  return (
    <TransactionsProvider>
    <BrowserRouter>
      <Routes>
        <Header/>
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
