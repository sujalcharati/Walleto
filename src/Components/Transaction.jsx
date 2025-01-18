import React, { useContext } from "react";
import { Header } from "./Header";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TransactionTable from "./TransactionTable";
import { TransactionsContext } from "./Home";


export default  function Transaction(){
    const [startDate, setStartDate] = useState(new Date());
    const transactionList = useContext(TransactionsContext);
    console.log(transactionList);

    return (
        <div className="bg-black min-h-screen">
            <Header />
            <div className="text-white text-4xl fixed top-20 left-0 right-0 bg-gray-800 px-4 py-4 m-4">
                Transactions history
                <div className="mt-4">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="text-black p-2 rounded-md"
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Select a date"
                    />
                </div>
            </div>
            
            <TransactionTable transactionList={transactionList} />
        </div>
    );
    }