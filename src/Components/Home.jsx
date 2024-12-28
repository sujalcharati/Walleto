import React from "react";
import Transaction from "./Transaction";
// import AddTransaction from "./AddTransaction";
import { Header } from "./Header";
import { Summary } from "./Summary";
import { FiTrendingUp, FiTrendingDown, FiCreditCard } from "react-icons/fi";


export const Home = () => {
    const [income, setIncome] = React.useState(0);
    const [expense, setExpense] = React.useState(24);
    const [balance, setBalance] = React.useState(-24);

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
            </div>
            <Transaction />
            {/* <Addtransaction /> */}
        </div>
    );
};
