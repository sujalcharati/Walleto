
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
 
export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactionList, setTransactionList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  // Function to calculate totals from transaction list
  const calculateTotals = (transactions) => {
    const incomeTotal = transactions
      .filter(transaction => transaction.type.toLowerCase() === "income")
      .reduce((acc, transaction) => acc + Number(transaction.amount), 0);
    
    const expenseTotal = transactions
      .filter(transaction => transaction.type.toLowerCase() === "expense")
      .reduce((acc, transaction) => acc + Number(transaction.amount), 0);
    
    setIncome(incomeTotal);
    setExpense(expenseTotal);
    setBalance(incomeTotal - expenseTotal);
  };

  // Fetch transactions from API
  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("authtoken");
      if (!token) {
        console.error("No token found in localStorage");
        setIsLoading(false);
        return;
      }
      
      const response = await axios.get(
        `/api/transaction/getTransactions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const transactions = response.data.transactions || [];
      setTransactionList(transactions);
      calculateTotals(transactions);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Add transaction function
  const addTransaction = async (formData) => {
    if (!formData || !formData.type || !formData.amount) {
      console.error("Invalid formData:", formData);
      return;
    }

    try {
      const token = localStorage.getItem("authtoken");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const updatedTransaction = {
        ...formData,
        type: formData.type.charAt(0).toUpperCase() + formData.type.slice(1),
        timestamp: new Date().toISOString(),
      };
      // Add to local state
      const newTransactionList = [updatedTransaction, ...transactionList];
      setTransactionList(newTransactionList);
      
      // Recalculate totals
      calculateTotals(newTransactionList);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{ 
        transactionList, 
        addTransaction,
        income,
        expense,
        balance,
        isLoading,
        fetchTransactions,
        
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};


