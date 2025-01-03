
import React, { useState } from "react";
import Transaction from "./Transaction";
import { Header } from "./Header";
import { Summary } from "./Summary";
import Popover from "./Popover";
import { FiTrendingUp, FiTrendingDown, FiCreditCard } from "react-icons/fi";

export const Home = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const updateValues = (type, amount) => {
    if (type === "income") {
      setIncome((prev) => prev + amount);
      setBalance((prev) => prev + amount);
    } else if (type === "expense") {
      setExpense((prev) => prev + amount);
      setBalance((prev) => prev - amount);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />
      <div className="min-h-screen bg-black p-6">
        <h1 className="text-3xl font-bold text-white mb-6">Summary</h1>
        <div className="grid grid-cols-3 gap-4">
          <Summary
            title="Income"
            value={`${income}`}
            icon={<FiTrendingUp />}
            color="bg-green-500"
          />
          <Summary
            title="Expense"
            value={`${expense}`}
            icon={<FiTrendingDown />}
            color="bg-red-500"
          />
          <Summary
            title="Balance"
            value={`${balance}`}
            icon={<FiCreditCard />}
            color="bg-purple-500"
          />
        </div>
        <button
          onClick={() => setIsPopoverOpen(true)}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </div>
      <Transaction />
      {isPopoverOpen && (
        <Popover onClose={() => setIsPopoverOpen(false)} onSave={updateValues} />
      )}
    </div>
  );
};
