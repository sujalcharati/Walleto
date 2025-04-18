import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
 
export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      // const API_BASE_URL = import.meta.env.REACT_APP_BACKEND_URL;
      try {
        const token = localStorage.getItem("authtoken");
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
        const response = await axios.get(
          `/api/transaction/getTransactions`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const transactions = response.data.transactions;
        setTransactionList(transactions);

        const income = transactions
          .filter((transaction) => transaction.type === "income")
          .reduce((acc, transaction) => acc + transaction.amount, 0);
        const expense = transactions
          .filter((transaction) => transaction.type === "expense")
          .reduce((acc, transaction) => acc + transaction.amount, 0);

        setIncome(income);
        setExpense(expense);
        setBalance(income - expense);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addTransaction = (formData) => {
    if (!formData || !formData.type || !formData.amount) {
      console.error("Invalid formData:", formData);
      return;
    }

    const updatedTransaction = {
      ...formData,
      type: formData.type.charAt(0).toUpperCase() + formData.type.slice(1),
    };

    setTransactionList((prev) => [...prev, updatedTransaction]);

    if (formData.type.toLowerCase() === "income") {
      setIncome((prev) => prev + formData.amount);
      setBalance((prev) => prev + formData.amount);
    } else {
      setExpense((prev) => prev + formData.amount);
      setBalance((prev) => prev - formData.amount);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{ transactionList, addTransaction,expense ,income,balance,setIncome,setExpense,setBalance,setTransactionList}}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
