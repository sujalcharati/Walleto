import React, { useState, useContext } from "react";
import { Header } from "./Header";
import { Summary } from "./Summary";
import Popover from "./Popover";
import { FiTrendingUp, FiTrendingDown, FiCreditCard } from "react-icons/fi";
import { TransactionsContext } from "./TransactionsProvider";


import "../App.css";

// export const TransactionsContext = createContext();
export const Home = () => {
  // const [income, setIncome] = useState(0);
  // const [expense, setExpense] = useState(0);
  // const [balance, setBalance] = useState(0);
  // const [transactions,setTransactions]=useState([]);
  // const [transactionList, setTransactionList] = useState([]);
  // console.log(transactionList);
    const { income, expense, balance, setIncome, setExpense, setBalance, transactionList, setTransactionList } = useContext(TransactionsContext);

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

  //   const addtransaction = (transaction) => {
  //   setTransactions((previous)=> [...previous,transaction])
  // }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem('authtoken');
  //       if (!token) {
  //         console.error("No token found in localStorage");
  //         return;
  //       }
  //       const response = await axios.get("http://localhost:4000/api/transaction/getTransactions", { headers: { Authorization: `Bearer ${token}` }});

  //       const transactions = response.data.transactions;
  //       const income = transactions
  //         .filter(transaction => transaction.type === 'income')
  //         .reduce((acc, transaction) => acc + transaction.amount, 0);
  //       const expense = transactions
  //         .filter(transaction => transaction.type === 'expense')
  //         .reduce((acc, transaction) => acc + transaction.amount, 0);

  //       setIncome(income);
  //       setExpense(expense);
  //       setBalance(income - expense);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
   
  const addTransaction = (formData) => {
    if (!formData || !formData.type || !formData.amount) {
      console.error("Invalid formData:", formData);
      return;
    }

    const updatedTransaction = {
      ...formData,
      type: formData.type.charAt(0).toUpperCase() + formData.type.slice(1)
    };

    setTransactionList(prev => [...prev, updatedTransaction]);
    const updatedTransactionList = [...transactionList, updatedTransaction];

    // console.log("Updated Transaction List:", [...transactionList, updatedTransaction]);
    console.log( updatedTransactionList )
  };



  return (
    // <TransactionsContext.Provider value={{ transactionList, addTransaction }}>
      <div className="bg-gray-800 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow bg-black p-6">
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
            className="add-transaction-btn mt-6 px-4 py-2 flex float-right bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Transaction
          </button>
        </div>
        <div className="animated-sphere"></div>
        {isPopoverOpen && (
          <Popover onClose={() => setIsPopoverOpen(false)} onSave={(formData) => {
            updateValues(formData.type, formData.amount);
            addTransaction(formData);
          }} />
        )}
      </div>
    // </TransactionsContext.Provider>
  );
};
