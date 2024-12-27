import React from "react";
import Transaction from "./Transaction";
import Addtransaction from "./Addtransaction";
import { Header } from "./Header";


export const Home = () => {
    return (
        <div className="bg-gray-800 min-h-screen">
            <Header />
            <Transaction />
            <Addtransaction />
        </div>
    );
};