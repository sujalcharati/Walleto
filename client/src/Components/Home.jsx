import React, { useState, useContext, useEffect } from "react";
import Popover from "./Popover";
import { TransactionsContext } from "./TransactionsProvider";
import { FiTrendingUp, FiTrendingDown, FiCreditCard, FiPlus, FiLogOut, FiUser, FiPieChart, FiList, FiSettings } from "react-icons/fi";
import "../App.css";
import axios from "axios";

// Enhanced Summary component with animations
const EnhancedSummary = ({ title, value, icon, color, bgColor, isLoading }) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-200">{title}</h2>
        <div className={`${color} rounded-full p-3`}>
          {icon}
        </div>
      </div>
      {isLoading ? (
        <div className="animate-pulse h-10 bg-gray-600 rounded"></div>
      ) : (
        <p className="text-4xl font-bold text-white">{value}</p>
      )}
    </div>
  );
};

// Transaction Item component
const TransactionItem = ({ transaction }) => {
  const getIcon = () => {
    if (transaction.type === "Income" || transaction.type === "income") return <FiTrendingUp className="text-green-500" />;
    return <FiTrendingDown className="text-red-500" />;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-3 shadow hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3 text-xl">{getIcon()}</div>
          <div>
            <p className="font-medium text-white">{transaction.description || transaction.type}</p>
            <p className="text-sm text-gray-400">{transaction.date 
    ? new Date(transaction.date).toLocaleDateString() 
    : new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <p className={`font-bold ${(transaction.type === "Income" || transaction.type === "income") ? "text-green-500" : "text-red-500"}`}>
          {(transaction.type === "Income" || transaction.type === "income") ? "+" : "-"}{transaction.amount}
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const {
    income,
    expense,
    balance,
    transactionList,
    addTransaction,
    fetchTransactions,
    isLoading  
  } = useContext(TransactionsContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState({ username: '', email: ''});
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setUserLoading(true);
      try {
        const token = localStorage.getItem("authtoken");
        if (!token) {
          console.error("No token found in localStorage");
          setUserLoading(false);
          return;
        }


        const response = await axios.get(`/api/transaction/getTransactions`, 
          { headers: { Authorization: `Bearer ${token}` }}
        );
        console.log(response);
        setUser(response.data);

        await fetchTransactions();
    
      
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUserData();
  }, []);



  // Format currency function
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  };

  // Handle the save action from the popover
  const handleSaveTransaction = (formData) => {
    // No need to update values here, the context handles it
    addTransaction(formData);
    setIsPopoverOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <div className="flex items-center mb-10">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
            <span className="font-bold text-lg">SW</span>
          </div>
          <h1 className="text-xl font-bold">Wallet</h1>
        </div>
        
        <div className="mb-10">
          <div className="flex items-center p-3 mb-6 bg-gray-700 rounded-lg">
            {userLoading ? (
              <div className="h-10 w-10 rounded-full bg-gray-600 animate-pulse"></div>
            ) : user?.avatar ? (
              <img src={user?.avatar} alt="User" className="h-10 w-10 rounded-full mr-3" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                <FiUser className="text-white" />
              </div>
            )}
            <div className="ml-2">
              {userLoading ? (
                <div>
                  <div className="h-4 bg-gray-600 rounded animate-pulse w-24 mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded animate-pulse w-32"></div>
                </div>
              ) : (
                <>
                  <p className="font-medium text-white">{user.username}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </>
              )}
            </div>
          </div>
          
          <ul className="space-y-2">
            <li 
              className={`p-3 rounded-lg cursor-pointer flex items-center ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <FiPieChart className="mr-3" />
              Dashboard
            </li>
            <li 
              className={`p-3 rounded-lg cursor-pointer flex items-center ${activeTab === 'transactions' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('transactions')}
            >
              <FiList className="mr-3" />
              Transactions
            </li>
            <li 
              className={`p-3 rounded-lg cursor-pointer flex items-center ${activeTab === 'settings' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveTab('settings')}
            >
              <FiSettings className="mr-3" />
              Settings
            </li>
          </ul>
        </div>
        
        <button className="w-full mt-auto p-3 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center"
        onClick={()=>{
          localStorage.removeItem('authtoken');
          window.location.href='/'
        }}>
          <FiLogOut className="mr-2" />
          Logout
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-900 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'transactions' && 'Transactions'}
            {activeTab === 'settings' && 'Settings'}
          </h1>
          
          <button
            onClick={() => setIsPopoverOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 shadow-lg"
          >
            <FiPlus className="mr-2" />
            Add Transaction
          </button>
        </div>
        
        {activeTab === 'dashboard' && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <EnhancedSummary
                title="Income"
                value={formatCurrency(income)}
                icon={<FiTrendingUp className="text-white text-xl" />}
                color="bg-green-600"
                bgColor="bg-gray-800"
                isLoading={isLoading}
              />
              <EnhancedSummary
                title="Expense"
                value={formatCurrency(expense)}
                icon={<FiTrendingDown className="text-white text-xl" />}
                color="bg-red-600"
                bgColor="bg-gray-800"
                isLoading={isLoading}
              />
              <EnhancedSummary
                title="Balance"
                value={formatCurrency(balance)}
                icon={<FiCreditCard className="text-white text-xl" />}
                color="bg-purple-600"
                bgColor="bg-gray-800"
                isLoading={isLoading}
              />
            </div>
            
            {/* Recent Transactions */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
                <button 
                  className="text-blue-400 hover:text-blue-300 text-sm"
                  onClick={() => setActiveTab('transactions')}
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {isLoading ? (
                  // Loading skeleton
                  Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4 mb-3 animate-pulse">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gray-600 mr-3"></div>
                          <div>
                            <div className="h-4 bg-gray-600 rounded w-32 mb-2"></div>
                            <div className="h-3 bg-gray-600 rounded w-24"></div>
                          </div>
                        </div>
                        <div className="h-4 bg-gray-600 rounded w-16"></div>
                      </div>
                    </div>
                  ))
                ) : transactionList.length > 0 ? (
                  transactionList.slice(0, 5).map((transaction, index) => (
                    <TransactionItem key={index} transaction={transaction} />
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-4">No transactions yet. Add one to get started!</p>
                )}
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'transactions' && (
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-6">All Transactions</h2>
            
            {isLoading ? (
              // Loading skeleton
              Array(5).fill(0).map((_, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4 mb-3 animate-pulse">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-gray-600 mr-3"></div>
                      <div>
                        <div className="h-4 bg-gray-600 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-600 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-600 rounded w-16"></div>
                  </div>
                </div>
              ))
            ) : transactionList.length > 0 ? (
              <div className="space-y-3">
                {transactionList.map((transaction, index) => (
                  <TransactionItem key={index} transaction={transaction} />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-4">No transactions yet. Add one to get started!</p>
            )}
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-6">User Settings</h2>
            
            {userLoading ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Full Name</label>
                  <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Currency</label>
                  <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={user.username || ''} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={user.email || ''} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Currency</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {isPopoverOpen && (
        <Popover
          onClose={() => setIsPopoverOpen(false)}
          onSave={handleSaveTransaction}
        />
      )}
    </div>
  );
};

export default Home;